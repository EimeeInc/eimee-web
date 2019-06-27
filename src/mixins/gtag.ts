declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag(...args: any) {
  window.dataLayer.push(arguments);
}

export const initGtag = () => {
  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
};

export const updatePagePath = (location: Location) => {
  gtag("config", process.env.GATSBY_GOOGLE_ANALYTICS_UA, {
    page_path: location.pathname,
  });
};
