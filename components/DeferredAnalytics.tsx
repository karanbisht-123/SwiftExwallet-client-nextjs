'use client';

import { useEffect } from 'react';

export default function DeferredAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;
    let hasLoaded = false;

    const loadGTM = () => {
      if (hasLoaded) return;
      hasLoaded = true;

      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K7K43TRQ');
      `;
      document.head.appendChild(script);

      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-K7K43TRQ';
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    };

    timeoutId = setTimeout(loadGTM, 2000);

    const events = ['mousedown', 'touchstart', 'keydown', 'scroll'];
    const handleInteraction = () => {
      clearTimeout(timeoutId);
      loadGTM();
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };

    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };
  }, []);

  return null;
}
