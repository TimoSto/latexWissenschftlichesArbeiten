const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/getPDF': {
        target: 'http://localhost:8081/getPDF'
      },
      '/': {
        target: 'http://localhost:8081/',
        ws: false
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/assets/'
      : '/',
  outputDir: './assets/dist'
})
