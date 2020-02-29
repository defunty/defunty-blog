var path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/global.scss";'
      }
    }
  }
}
