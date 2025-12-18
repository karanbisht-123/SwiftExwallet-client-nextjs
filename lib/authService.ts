import { LoginCredentials, AuthResponse } from '@/types/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const AUTH_CONSTANTS = {
  TOKEN_KEY: 'token',
  TOKEN_EXPIRY_KEY: 'tokenExpiry',
  SESSION_DURATION: 24 * 60 * 60 * 1000,
  CHECK_INTERVAL: 60 * 60 * 1000,
} as const;

export const ROUTES = {
  LOGIN: '/admin/login',
  ADMIN: '/admin',
  BLOGS: '/admin/blogs',
} as const;

export const tokenUtils = {
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_CONSTANTS.TOKEN_KEY, token);
      const expiry = Date.now() + AUTH_CONSTANTS.SESSION_DURATION;
      localStorage.setItem(AUTH_CONSTANTS.TOKEN_EXPIRY_KEY, expiry.toString());
    }
  },

  getToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTH_CONSTANTS.TOKEN_KEY);
    }
    return null;
  },

  removeToken: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_CONSTANTS.TOKEN_KEY);
      localStorage.removeItem(AUTH_CONSTANTS.TOKEN_EXPIRY_KEY);
    }
  },

  isTokenValid: (): boolean => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(AUTH_CONSTANTS.TOKEN_KEY);
      const expiry = localStorage.getItem(AUTH_CONSTANTS.TOKEN_EXPIRY_KEY);

      if (!token || !expiry) return false;

      return Date.now() < parseInt(expiry);
    }
    return false;
  },
};

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      const data: AuthResponse = await response.json();

      if (data.token) {
        tokenUtils.setToken(data.token);
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  },

  logout: () => {
    tokenUtils.removeToken();
  },

  checkAuth: (): boolean => {
    return tokenUtils.isTokenValid();
  },

  getAuthHeader: (): Record<string, string> => {
    const token = tokenUtils.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
};
