export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hypernym/nuxt-gsap'],
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  app: {
  }
})
