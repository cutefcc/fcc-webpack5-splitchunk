const setIterm2Badge = require("set-iterm2-badge");
setIterm2Badge(
  "天儿不早了！人也不少了！\n 干点正事儿！\n 🚀  嘎嘎磕！  干就完了！"
);
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    a: "./src/index.js",
    // b: "./src/index2.js",
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "all",
      minSize: {
        javascript: 350000,
        style: 0,
      },
      //   maxSize: {
      //     javascript: 120000,
      //     style: 0,
      //   },
    },
  },
};
