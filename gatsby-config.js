const isDev = process.env.NODE_ENV === "development";

module.exports = {
  siteMetadata: {
    title: `エイミー株式会社《 Eimee Inc. 》`,
    description: `日本のモノづくりを応援！！電子工作やハードウェア、IoTの知識の交流が行える『elchika(エルチカ)』を運営している、エイミー株式会社のホームページです。`,
    author: `@EimeeInc`,
    baseUrl: "https://eimee.co.jp",
    script: [
      "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserverEntry%2CIntersectionObserver",
      !isDev &&
        `https://www.googletagmanager.com/gtag/js?id=${
          process.env.GATSBY_GOOGLE_ANALYTICS_UA
        }`,
    ].filter(x => x),
    css: [
      "/assets/style/reset.css",
      "/assets/style/fakeLoader.css",
      "/assets/style/global.css",
      "https://fonts.googleapis.com/css?family=Montserrat:400,700",
      "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700",
      "https://fonts.googleapis.com/css?family=Sawarabi+Gothic:400,700&text=%E2%80%9C%E2%80%9D",
      "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Template/Default.tsx`),
      },
    },
    `gatsby-plugin-emotion`,
  ],
};
