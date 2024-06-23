export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hypernym/nuxt-gsap'],
  app: {
    head: {
      script: [
        { src: '/main.js', type: 'module' }
      ],
    }
  }
})
