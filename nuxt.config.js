const pkg = require('./package')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Juan Daniel SANTANA - Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'author', content: 'Juan Daniel Santana' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Configuration for @nuxtjs/pwa
   ** https://developer.mozilla.org/en-US/docs/Web/Manifest
   */
  manifest: {
    name: 'Juan Daniel Santana portfolio',
    short_name: 'Juan Daniel Santana',
    description: 'Software engineer and BIM developer',
    theme_color: '#0f294c'
  },

  meta: {
    // apple-mobile-web-app-capable=yes
    // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
    mobileAppIOS: true,
    appleStatusBarStyle: '#0f294c'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/common.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleFonts: {
    families: {
      'Open+Sans': {
        wght: [300, 400, 600, 700],
        ital: [300, 400, 600, 700]
      },
      Raleway: {
        wght: [300, 400, 600, 700],
        ital: [300, 400, 600, 700]
      },
      Poppins: {
        wght: [300, 400, 600, 700],
        ital: [300, 400, 600, 700]
      }
    }
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.js' },
      { code: 'fr', name: 'Français', file: 'fr.js' },
      { code: 'es', name: 'Español', file: 'es.js' }
    ],
    langDir: '~/locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'en'
    },
    detectBrowserLanguage: {
      alwaysRedirect: true
    }
  }
}
