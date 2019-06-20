const webpack = require("webpack");
const config = require("./webpack.server.js");
const dotenv = require("dotenv");

dotenv.config();

config.mode = process.env.NODE_ENV;
config.plugins = config.plugins || [];
config.plugins.push(
  new webpack.EnvironmentPlugin({ NODE_ENV: process.env.NODE_ENV }),
);

module.exports = config;
