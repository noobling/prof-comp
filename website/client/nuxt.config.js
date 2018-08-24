const pkg = require('../package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'spa',

  /*
  ** Allow us to put package.json in root directory
  */
  srcDir: __dirname,

  /*
  ** Laravel api server is by default in the form hostname/api
  */
  env: {
    apiUrl: process.env.DEPLOY_ENV === 'PROD' ? '/api' : 'http://localhost:8000/api',
    filestackAPI_KEY: 'AfELD9dXUTtSTu8yyIK5Iz',
    defaultAvatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'black' },

  /*
  ** Stuff to load before each page load
  */
  router: {
    middleware: ['check-auth']
  },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    { src: 'sweetalert2/src/sweetalert2', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/axios',
    { src: '@/plugins/vue-particles', ssr: false }    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
