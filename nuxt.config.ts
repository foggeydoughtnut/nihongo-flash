// https://nuxt.com/docs/api/configuration/nuxt-config
export default {

  head: {
    titleTemplate: '%s - web',
    title: 'web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  devtools: { 
    enabled: true,
  },
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',,
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [{ src: 'https://kit.fontawesome.com/2392e370a0.js' }]
    }
  },
  build: {
    transpile: [/@vue[\\/]composition-api/],
  },
}
