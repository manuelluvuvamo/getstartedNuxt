// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'My Get Started Nuxt Application',
      titleTemplate: '%s | manuelluvuvamo.vercel.app',
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
    }
  },
  $development: {
    app: {
      head: {
        title: 'DEV'
      }
    }
  },
  $production: {
    app: {
      head: {
        title: 'PROD'
      }
    }
  },
  css: ['~/assets/css/main.css']
})
