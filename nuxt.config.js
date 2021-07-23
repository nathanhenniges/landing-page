export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.SITE_DESCRIPTION,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          solid: ['faCalendar'],
          brands: ['faTwitter', 'faFacebookF', 'faInstagram'],
        },
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [100, 300, 400, 500, 700, 900],
          Montserrat: [100, 300, 400, 500, 700, 900],
        },
      },
    ],
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  /*
   ** Color mode configuration
   */
  colorMode: {
    classSuffix: '',
  },

  /*
   ** Tailwindcssconfiguration
   */
  tailwindcss: {
    mode: 'jit',
  },

  /**
   * purgeCSS configuration
   */
  purgeCSS: {
    whitelist: ['dark'],
  },

  googleAnalytics: {
    id: process.env.GA_TRACKING_ID,
  },
  /*
   ** Runtime configuration
   */
  publicRuntimeConfig: {
    landing: {
      title: process.env.LANDING_PAGE_TITLE || '',
      title2: process.env.LANDING_PAGE_TITLE_2 || '',
      subtitle: process.env.LANDING_PAGE_SUBTITLE || '',
    },
    social: {
      twitter: {
        url: process.env.TWITTER || '',
        enabled: process.env.TWITTER !== undefined,
      },
      facebook: {
        url: process.env.FACEBOOK || '',
        enabled: process.env.FACEBOOK !== undefined,
      },
      instagram: {
        url: process.env.INSTAGRAM || '',
        enabled: process.env.INSTAGRAM !== undefined,
      },
      calendly: {
        url: process.env.CALENDLY || '',
        enabled: process.env.CALENDLY !== undefined,
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
