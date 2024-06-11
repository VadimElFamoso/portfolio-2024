export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      script: [
        { src: './public/main.js' }
      ],
    }
  }
})
