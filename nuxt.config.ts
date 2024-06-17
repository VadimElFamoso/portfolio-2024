export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { src: '/main.js', type: 'module' }
      ],
    }
  }
})
