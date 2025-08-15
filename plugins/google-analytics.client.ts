// plugins/google-analytics.client.ts
export default defineNuxtPlugin((nuxtApp) => {
  const GA_MEASUREMENT_ID = 'G-61BT9HZHZL';

  // Only run on client-side
  if (process.client) {
    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    // Track page changes
    nuxtApp.hook('page:finish', () => {
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname + window.location.search,
      });
    });
  }
});

// Add type for global window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
