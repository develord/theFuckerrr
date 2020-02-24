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
    name: 'Amine',
    short_name: 'Amine',
    description: 'Amine',
    theme_color: '#2F495E',
    start_url: ''
  },

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],

  vuetify: {
    /* module options */
    treeShake: true,
    optionsPath: "./vuetify.options.js"
  },

  axios: {
    baseURL: '/'
  },

  plugins: [
  ],

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
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
