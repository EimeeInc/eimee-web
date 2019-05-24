const path = require("path");

module.exports = {
  siteMetadata: {
    title: `エイミー株式会社《 Eimee Inc. 》`,
    description: `クレジットカード一括比較サイト【hikaQ(ヒカキュー)】を運営する「エイミー株式会社」です。皆さんの日々を豊かにする便利なアイデア・サービスをお届けします。Yahoo!プロモーション広告正規代理店｜東京都江東区｜エイミー株式会社《 Eimee Inc. 》`,
    author: `@EimeeInc`,
    baseUrl: "https://eimee.co.jp",
    css: [
      "/assets/style/reset.css",
      "/assets/style/fakeLoader.css",
      "/assets/style/global.css",
      "https://fonts.googleapis.com/css?family=Montserrat:400,700",
      "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700",
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
