const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/flow-podcast/' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Flow Podcast - A melhor conversa que você vai ouvir.'
      return args
    })
  },
  configureWebpack: {
    ignoreWarnings: [/export 'default' \(imported as 'style0'\) was not found/],
    performance: {
      maxAssetSize: 512000
    }
  }
})
