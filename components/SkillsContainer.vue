<template>
  <div id="skills_container">
    <div class="text_container">
      <div v-for="(item, index) in items" :key="index" :class="['text', { active: currentIndex === index }]">
        <div v-html="item.text"></div>
      </div>
      <div v-for="(item, index) in items" :key="index" :class="['presentation', { active: currentIndex === index }]">
        <div v-html="item.presentation"></div>
      </div>
    </div>

    <div class="img_container">
      <img :src="items[currentIndex].image" alt="">
    </div>
  </div>

  <div class="cta_cv">
    <VueWriter :array="subtitles" :typeSpeed="70" :eraseSpeed="50" />
    <div class="cv_container">
      <a href="/pdf/CV_Vadim_français.pdf" download>Télécharger mon cv <img src="/img/french_flag.png" alt=""></a>
      <a href="/pdf/CV_Vadim_anglais.pdf" download>Download my resume <img src="/img/english_flag.png" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          text: "<h2>Développeur</h2><p>Fullstack</p><p>VueJS Nuxt</p>",
          presentation: "<p>Pour des applications web performantes et exigeantes.</p>",
          image: "/img/canyon.jpg"
        },
        {
          text: "<h2>Designer créatif</h2><p>UX/UI</p><p>Figma Sketch</p>",
          presentation: "<p>Création de designs intuitifs et esthétiques.</p>",
          image: "/img/sunflower.jpg"
        },
        {
          text: "<h2>Gestion de projet</h2><p>Agile Scrum</p><p>Leadership</p>",
          presentation: "<p>Conduite de projets avec des méthodes agiles.</p>",
          image: "/img/lake.jpg"
        }
      ],
      subtitles: [
        "Vous voulez en savoir plus ?",
        "Want to know more ?"
      ]
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeDestroy() {
    this.stopCarousel();
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(this.next, 3000); // Change toutes les 3 secondes
    },
    stopCarousel() {
      clearInterval(this.carouselInterval);
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }
  }
};
</script>

<style lang="scss">
@import '../public/sass/vars.scss';

#skills_container {
  align-items: center;
  background-color: $primary-color;
  display: flex;
  font-family: 'gamay-wide', sans-serif;
  font-size: 6rem;
  font-weight: 700;
  gap: 50px;
  height: 100vh;
  padding: 50px 50px;
  text-transform: uppercase;

  .text_container {
    width: 50%;

    .text.active {
      display: block;
    }

    h2{
      font-size: 4vw;
    }

    p {
      display: block;
      font-size: 3vw;
    }

    .text {
      display: none;
    }

    .presentation.active {
      display: block;
      font-weight: 400;

      p {
        font-size: 2vw;
      }
    }

    .presentation {
      display: none;
    }
  }

  .img_container{
    width: 50%;
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
}

.cta_cv {
  background-color: $primary-color;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-family: 'gamay-wide', sans-serif;
  padding: 100px 0;
  text-align: center;

  .is-typed span.typed {
    color: $secondary-color;
    font-size: 3.75vw;
  } 

  &::before {
    content: url("../public/devider.svg");
  }

  p {
    font-size: 4vw;
    font-weight: 700;
    display: block;
    margin: auto;
    letter-spacing: 10px;
    text-transform: uppercase;
    width: 75%;
  }

  .cv_container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: auto;
    width: 50%;

    a {
      align-items: center;
      background-color: $fourth-color;
      border: none;
      border-radius: 50px;
      color: $tertiary-color;
      display: flex;
      font-size: 1.5vw;
      font-family: 'gamay';
      font-weight: 100;
      gap: 15px;
      margin: auto;
      padding: 25px 25px;
      text-decoration: none;
      width: auto;

      img{
        height: 40px;
        width: auto;
      }
    }
  }
}

@media screen and (max-width: 768px){
  #skills_container{
    flex-direction: column;
  }
}
</style>
