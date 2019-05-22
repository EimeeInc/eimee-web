const path = require("path");

module.exports = {
  siteMetadata: {
    title: `エイミー株式会社《 Eimee Inc. 》`,
    description: `クレジットカード一括比較サイト【hikaQ(ヒカキュー)】を運営する「エイミー株式会社」です。皆さんの日々を豊かにする便利なアイデア・サービスをお届けします。Yahoo!プロモーション広告正規代理店｜東京都江東区｜エイミー株式会社《 Eimee Inc. 》`,
    author: `@EimeeInc`,
    baseUrl: "https://eimee.co.jp",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        syntax: "postcss-scss",
        postCssPlugins: [
          require("postcss-import")({
            resolve(id, basedir, { root, resolve }) {
              const fullPath = id.startsWith("@/") ? path.join(root, "src", id.slice(2)) : path.join(basedir, id);

              return fullPath;
            }
          }),
          require("postcss-preset-env")(),
          require("postcss-nested")(),
          require("postcss-sorting")(),
          require("postcss-css-variables")(),
          require("postcss-calc")(),
          require("postcss-functions")(),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
