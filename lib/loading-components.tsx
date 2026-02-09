import dynamic from 'next/dynamic';

const LoadingSkeleton = ({ height = '400px' }: { height?: string }) => (
  <div
    className="animate-pulse bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg"
    style={{ minHeight: height }}
  />
);

export const DynamicOneTapTrade = dynamic(() => import('@/components/server/OneTapTradeServer'), {
  loading: () => <LoadingSkeleton height="400px" />,
  ssr: true,
});

export const DynamicWhySwiftEx = dynamic(() => import('@/components/client/WhySwiftExClient'), {
  loading: () => <LoadingSkeleton height="300px" />,
});

export const DynamicFeatures = dynamic(() => import('@/components/server/FeaturesSectionServer'), {
  loading: () => <LoadingSkeleton height="500px" />,
  ssr: true,
});

export const DynamicSplitSection = dynamic(
  () => import('@/components/server/SplitSectionScrollServer'),
  {
    loading: () => <LoadingSkeleton height="600px" />,
    ssr: true,
  }
);

export const DynamicMobileSplit = dynamic(
  () => import('@/components/server/MobileSplitScreenServer'),
  {
    loading: () => <LoadingSkeleton height="600px" />,
    ssr: true,
  }
);

export const DynamicPrivateSecure = dynamic(() => import('@/components/server/PrivateSecure'), {
  loading: () => <LoadingSkeleton height="300px" />,
  ssr: true,
});

export const DynamicBanner = dynamic(() => import('@/components/server/Banner'), {
  loading: () => <LoadingSkeleton height="200px" />,
  ssr: true,
});