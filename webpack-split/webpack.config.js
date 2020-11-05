const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    // page1: "./src/index1.js",
    page3: "./src/index3.js",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin()],
  //   optimization: {
  //     splitChunks: {
  //       chunks: "all",
  //       minSize: 10,
  //       cacheGroups: {
  //         defaultVendors: {
  //           minChunks: 1,
  //           priority: 1,
  //           name: "default",
  //         },
  //         reactBundle: {
  //           test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
  //           name: "react.bundle",
  //           priority: 2,
  //           minSize: 100,
  //         },
  //         // vendors: {
  //         //   test: /[\\/]node_modules[\\/]/,
  //         //   priority: 2,
  //         //   name: "vendors",
  //         // },
  //       },
  //     },
  //   },
  mode: "production",
};
