'use client';

import { useEffect, useState } from 'react';

export default function DeferredAnalytics() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    let hasLoaded = false;

    const loadGA = () => {
      if (hasLoaded) return;
      hasLoaded = true;

      const script1 = document.createElement('script');
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-7G08XH7CKJ';
      script1.async = true;
      script1.defer = true;

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7G08XH7CKJ', {
          page_path: window.location.pathname,
        });
      `;

      document.head.appendChild(script1);
      document.head.appendChild(script2);
      setIsLoaded(true);
    };

    timeoutId = setTimeout(loadGA, 5000);

    const events = ['mousedown', 'touchstart', 'keydown', 'scroll'];
    const handleInteraction = () => {
      clearTimeout(timeoutId);
      loadGA();
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };

    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return null;
}
