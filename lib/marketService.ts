export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  market_cap_rank: number;
  last_updated: string;
  sparkline?: number[];
}

export interface CoinLink {
  name: string;
  url: string;
  type: string;
}

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  image: string;
  description: string;
  market_cap_rank: number;
  current_price: number;
  market_cap: number;
  total_volume: number;
  high_24h?: number | null;
  low_24h?: number | null;
  price_change_24h?: number | null;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_date: string;
  atl?: number | null;
  atl_date?: string | null;
  last_updated: string;
  sparkline?: number[];
  links?: CoinLink[];
  tags?: string[];
  provider?: string;
}

export interface ChartDataPoint {
  date: number;
  price: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const CACHE_DURATION = 10 * 60 * 1000;
const CACHE_KEY_PREFIX = 'crypto_chart_';

interface CacheData {
  data: ChartDataPoint[];
  timestamp: number;
  period: string;
}

export function getCachedChartData(coinId: string, period: string): ChartDataPoint[] | null {
  try {
    const cacheKey = `${CACHE_KEY_PREFIX}${coinId}_${period}`;
    const cached = localStorage.getItem(cacheKey);

    if (!cached) return null;

    const parsed: CacheData = JSON.parse(cached);
    const now = Date.now();

    if (now - parsed.timestamp > CACHE_DURATION) {
      localStorage.removeItem(cacheKey);
      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
}
export function setCachedChartData(coinId: string, period: string, data: ChartDataPoint[]): void {
  try {
    const cacheKey = `${CACHE_KEY_PREFIX}${coinId}_${period}`;
    const cacheData: CacheData = {
      data,
      timestamp: Date.now(),
      period
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
}

export function clearExpiredCache(): void {
  try {
    const now = Date.now();
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(CACHE_KEY_PREFIX)) {
        const cached = localStorage.getItem(key);
        if (cached) {
          try {
            const parsed: CacheData = JSON.parse(cached);
            if (now - parsed.timestamp > CACHE_DURATION) {
              localStorage.removeItem(key);
            }
          } catch (e) {
            localStorage.removeItem(key);
          }
        }
      }
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}

export function sparklineToChartData(sparkline: number[]): ChartDataPoint[] {
  const now = Date.now();
  const timeStep = (24 * 60 * 60 * 1000) / sparkline.length;

  return sparkline.map((price, index) => ({
    date: now - (sparkline.length - index) * timeStep,
    price
  }));
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';


export async function getMarketData(): Promise<CoinData[]> {
  try {
    const res = await fetch(`${BASE_URL}/crypto/coins`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch market data: ${res.statusText}`);
    }

    const response: ApiResponse<CoinData[]> = await res.json();

    if (!response.success) {
      throw new Error('API returned unsuccessful response');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    return [];
  }
}

export function getTopGainers(data: CoinData[], count: number = 5): CoinData[] {
  return [...data]
    .sort((a, b) => (b.price_change_percentage_24h || 0) - (a.price_change_percentage_24h || 0))
    .slice(0, count);
}

export function getTopLosers(data: CoinData[], count: number = 5): CoinData[] {
  return [...data]
    .sort((a, b) => (a.price_change_percentage_24h || 0) - (b.price_change_percentage_24h || 0))
    .slice(0, count);
}


export async function getCoinDetails(
  id: string
): Promise<{ data: CoinDetails | null; error?: string; errorType?: 'rate_limit' | 'not_found' | 'unknown' }> {
  try {
    const res = await fetch(`${BASE_URL}/crypto/coin/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Error response for ${id}:`, res.statusText);
      if (res.status === 429) {
        return { data: null, error: 'Too many requests', errorType: 'rate_limit' };
      }
      if (res.status === 404) {
        return { data: null, error: 'Coin not found', errorType: 'not_found' };
      }
      return { data: null, error: 'Failed to fetch coin details', errorType: 'unknown' };
    }

    const response: ApiResponse<CoinDetails> = await res.json();

    if (!response.success) {
      return { data: null, error: 'API returned unsuccessful response', errorType: 'unknown' };
    }

    return { data: response.data };
  } catch (error) {
    console.error(`Error fetching details for ${id}:`, error);
    return { data: null, error: 'Network error', errorType: 'unknown' };
  }
}


export async function getCoinMarketChart(
  id: string,
  days: string = '7'
): Promise<ChartDataPoint[]> {
  const cached = getCachedChartData(id, days);
  if (cached) {
    console.log(`Using cached data for ${id} (${days} days)`);
    return cached;
  }

  try {
    const res = await fetch(`${BASE_URL}/crypto/chart/${id}?days=${days}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch market chart');

    const response: ApiResponse<{ prices: [number, number][] }> = await res.json();

    if (!response.success) {
      throw new Error('API returned unsuccessful response');
    }
    const chartData = response.data.prices.map((item: [number, number]) => ({
      date: item[0],
      price: item[1],
    }));

    setCachedChartData(id, days, chartData);

    return chartData;
  } catch (error) {
    console.error(`Error fetching chart for ${id}:`, error);
    return [];
  }
}

export interface NewsArticle {
  symbol: string;
  publishedDate: string;
  publisher: string;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
}

const FMP_API_KEY = process.env.NEXT_PUBLIC_FMP_API_KEY || '';
const FMP_BASE_URL = 'https://financialmodelingprep.com/stable/news/crypto-latest';

export async function getCryptoNews(symbol?: string, limit: number = 20): Promise<NewsArticle[]> {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      apikey: FMP_API_KEY,
    });

    if (symbol) {
      params.append('symbols', `${symbol.toUpperCase()}USD`);
    }

    const res = await fetch(`${FMP_BASE_URL}?${params.toString()}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch crypto news: ${res.statusText}`);
    }

    const data: NewsArticle[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto news:', error);
    return [];
  }
}