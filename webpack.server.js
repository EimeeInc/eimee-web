const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  mode: "production",
  output: {
    devtoolModuleFilenameTemplate(info) {
      const rel = path
        .relative(__dirname, info.absoluteResourcePath)
        .split(path.sep)
        .join("/");

      return `webpack://${info.namespace}/${rel}`;
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ["@babel/preset-typescript", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
};
