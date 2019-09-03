import { resolve } from 'path'
import webpack from "webpack"
import { baseDir, title, description } from "./config"

module.exports = {
  mode: 'spa',
  srcDir: 'src/',
  router: {
    base: baseDir,
    // middleware: 'authenticate'
	},
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: description }
    ],
    link: [],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/canvg/1.4/rgbcolor.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/stackblur-canvas@^1/dist/stackblur.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/canvg/dist/browser/canvg.min.js" }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~assets/stylus/reset.styl',
    '~assets/stylus/base.styl',
    'element-ui/lib/theme-chalk/index.css'
  ],
  plugins: [
    '~plugins/vue-components',
    '~plugins/element-ui'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    ['nuxt-stylus-resources-loader', [
      '~assets/stylus/variables.styl',
      '~assets/stylus/mixins.styl',
      '~assets/stylus/extends.styl',
      '~assets/stylus/override.styl',
    ]],
    ['@nuxtjs/google-analytics', {
      id: 'UA-146950584-1'
    }]
  ],
  workbox: {
    dev: true,
  },
  manifest: {
    name: title,
    short_name: title,
    title: title,
    description: description,
    lang: 'ja',
    theme_color: '#000000',
    background_color: '#ffffff'
  },
  generate: {
    dir: resolve(__dirname, './dist' + baseDir),
  },
  build: {
    vendor: ['element-ui'],
    extend(config, ctx) {
      // if(!ctx.isDev){
      //   config.output.publicPath = '/' + baseDir + '_nuxt/'
      // }
      if(ctx.isDev && ctx.isClient){
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
