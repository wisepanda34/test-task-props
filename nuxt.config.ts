export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  // https://nuxt.com/modules
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt'
  ],

  css: ['@/assets/scss/main.scss'],

  postcss: {
    plugins: {
      'postcss-nesting': {},
    },
  },

  // https://devtools.nuxt.com
  devtools: {
    enabled: true,
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  compatibilityDate: '2025-03-08',
})
