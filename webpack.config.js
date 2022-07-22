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
          enforce: true, // 这个打开才能吧 utils 提出来  告诉 webpack 忽略 splitChunks.minSize、splitChunks.minChunks、splitChunks.maxAsyncRequests 和 splitChunks.maxInitialRequests 选项，并始终为此缓存组创建 chunk。
          reuseExistingChunk: true,
        },
        venders: {
          name: "venders",
          test: /[\\/]node_modules[\\/]/,
          priority: 1, // 设置优先级，越大越优先打包
        },
      },
      // 生成 chunk 的最小体积（以 bytes 为单位）
      minSize: {
        javascript: 30000,
        style: 0,
      },
      // 告诉 webpack 尝试将大于 maxSize 个字节的 chunk 分割成较小的部分。 这些较小的部分在体积上至少为 minSize（仅次于 maxSize）。 该算法是确定性的，对模块的更改只会产生局部影响。这样，在使用长期缓存时就可以使用它并且不需要记录。
      maxSize: {
        javascript: 120000,
        style: 0,
      },
      // maxAsyncSize 和 maxSize 的区别在于 maxAsyncSize 仅会影响按需加载 chunk 的体积，而 maxSize 会影响所有 chunk 的体积。
      // maxAsyncRequests 按需加载时的最大并行请求数。
      // maxInitialRequests 入口点的最大并行请求数。
      // 实际优先级是 maxInitialRequest/maxAsyncRequests < maxSize < minSize。
    },
  },
};
