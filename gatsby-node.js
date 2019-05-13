const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
      },
    })
  }