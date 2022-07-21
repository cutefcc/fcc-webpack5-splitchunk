const setIterm2Badge = require("set-iterm2-badge");
setIterm2Badge(
  "天儿不早了！人也不少了！\n 干点正事儿！\n 🚀  嘎嘎磕！  干就完了！"
);
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  //   entry: {
  //     a: "./src/index.js",
  //     b: "./src/index2.js",
  //   },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          chunks: "all",
          name: "chunk-common",
          minChunks: 2, // 最少被引用次数 >=  时生成公共代码块，一般设置为2 or 3
          maxInitialRequests: 5,
          priority: 0, // 设置优先级，越大越优先打包
          enforce: true,
          reuseExistingChunk: true,
        },
        venders: {
          name: "venders",
          test: /[\\/]node_modules[\\/]/,
          priority: 1, // 设置优先级，越大越优先打包
        },
      },
      minSize: {
        javascript: 30000,
        style: 0,
      },
      //   maxSize: {
      //     javascript: 120000,
      //     style: 0,
      //   },
    },
  },
};
