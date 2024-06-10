// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://awesome-lib.js' }
      ],
    }
  }
})
