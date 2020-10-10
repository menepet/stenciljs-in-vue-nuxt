module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    port: 8081 
  },
  chainWebpack: (config) => { config.resolve.symlinks(false) }
};
