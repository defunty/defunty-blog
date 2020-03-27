var path = require('path')

const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  //webpack config
  configureWebpack: () => {
      return {
          plugins: [
              new PrerenderSPAPlugin({
                  staticDir: path.join(__dirname, 'dist'),
                  routes: [ '/' ]
              })
          ]
      }
  },
  //scss config
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/global.scss";'
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'defunty blog';
        return args;
      });
  }
}
