const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const plugins = [];

if (process.env.BUNDLE_VISUALIZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

function resolvePath(dir) {
  return path.join(__dirname, dir);
}

const pagesConfig = {
  index: {
    title: "首页"
  }
};

const pages = (() => {
  const pages = {};
  Object.keys(pagesConfig).forEach(pageName => {
    pages[pageName] = {
      entry: `src/main.ts`,
      template: "public/index.html",
      filename: `${pageName}.html`,
      ...pagesConfig[pageName]
    };
  });
  return pages;
})();

module.exports = {
  css: {
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },
  pages,
  chainWebpack: config => {
    config.resolve.alias.set(
      "@ant-design/icons/lib/dist$",
      resolvePath("src/common/icons.ts")
    );

    if (process.env.NODE_ENV === "production") {
      config.optimization.splitChunks({
        cacheGroups: {
          vendors: {
            name: "chunk-vendors",
            test(module, chunks) {
              const isVendor = /node_modules/.test(module.resource);
              const isInIndex = chunks.some(chunk => chunk.name === "index");
              return isVendor && isInIndex;
            },
            priority: -10,
            chunks: "initial"
          }
        }
      });
    }
  },
  configureWebpack: config => {
    if (plugins && plugins.length) {
      config.plugins = [...config.plugins, ...plugins];
    }
  }
};
