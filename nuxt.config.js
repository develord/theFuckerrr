//import purgecss from '@fullhuman/postcss-purgecss'
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
  mode: 'universal',
  head: {
    titleTemplate: 'Amine',
    meta: [
      { property: 'og:image', content: 'https://user-images.githubusercontent.com/904724/58238637-f189ca00-7d47-11e9-8213-ae072d7cd3aa.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@nuxt_js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://api.hackerwebapp.com' },
      { rel: 'preconnect', href: 'https://api.hackerwebapp.com' }
    ]
  },

  loading: {
    color: '#00C48D'
  },

  manifest: {
    name: 'ProposalMate',
    short_name: 'ProposalMate',
    lang: 'fr',
    description: 'Create beautiful business proposals',
    theme_color: '#188269',
    background_color: '#000'
  },

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: '/'
  },

  plugins: [
  ],

  vuetify: {
    treeShake: true,
    optionsPath: './vuetify.options.js'
  },

  render: {
    http2: {
      push: true
    },
    static: {
      maxAge: '1y',
      setHeaders (res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
        }
      }
    }
  },

  build: {
    extractCSS: true,
    postcss: {
      plugins: [
        purgecss({
          content: ['./pages/**/*.vue', './layouts/**/*.vue', './components/**/*.vue', './node_modules/vuetify/src/**/*.js', './node_modules/vuetify/src/**/*.ts'],
          whitelist: ['html', 'body'],
        })
      ]
    }
  }
}
