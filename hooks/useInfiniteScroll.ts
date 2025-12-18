import { useEffect, useRef } from 'react';

export default function useInfiniteScroll(callback: () => void, disabled: boolean) {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [callback, disabled]);

  return observerTarget;
}
