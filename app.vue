<template>
  <!--Todo : A intégrer à la fin : -->

  <link rel="stylesheet" href="https://use.typekit.net/ekn5xco.css">

  <div class="container" id="header">
    <div class="navbar">
      <ul>
        <li><a href="#skills">.skills()</a></li>
        <li><a href="#projects">.projects()</a></li>
        <li><a href="#header" id="title">Vadim2k.dev</a></li>
        <li><a href="#blog">.blog()</a></li>
        <li><a href="#contact">.contact()</a></li>
      </ul>
    </div>

    <div class="header_wrapper">
      <div class="title">
        <h1>Vadim Khenfer</h1>
        <VueWriter :array="['Développeur web passionné.']" />
      </div>

      <img src="./public/img/vadim_header.png" alt="Image de Khenfer Vadim détourée">
    </div>

    <a href="#project_container">
    <div id="cta_circle">
        <img src="./assets/svg/arrow_down.svg" alt="Flèche vers le bas">
    </div>
    </a>
  
    <a href="https://wpengine.com/wp-content/uploads/2017/02/reasonstolovewordpress.jpg" target="_blank" class="background_text">code is poetry</a>
  
  </div>

  <ProjectContainer/>
  <CtaContainer/>
  <BlogContainer/>
  <SkillsContainer/>
  <Footer/>

</template>

<script>
import ProjectContainer from './components/ProjectContainer.vue'
import CtaContainer from './components/CtaContainer.vue'
import SkillsContainer from './components/SkillsContainer.vue'
import BlogContainer from './components/BlogContainer.vue'
import Footer from './components/Footer.vue'

import {VueWriter} from 'vue-writer'

export default {
  name: 'App',
  components: {
    ProjectContainer,
    CtaContainer,
    SkillsContainer,
    BlogContainer,
    Footer,
    VueWriter
  },
  mounted() {
    this.animateTitle();
  },
  methods: {
  animateTitle() {
    const title = document.querySelector("#title");
    if (title) {
      const text = title.innerText;
      title.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');

      const letters = title.querySelectorAll('span');
      const animationInterval = 110; // Time between each letter change
      const pauseTime = 2000; // Pause time at the end of the animation

      let currentIndex = 0;

      const animationLoop = () => {
        letters.forEach((letter, index) => {
          if (index === currentIndex) {
            letter.classList.add('highlight');
          } else {
            letter.classList.remove('highlight');
          }
        });

        currentIndex++;

        if (currentIndex <= letters.length) {
          setTimeout(animationLoop, animationInterval);
        } 
        else {
          // Reset currentIndex to 0 before starting the animation loop again
          currentIndex = 0;

          setTimeout(animationLoop, pauseTime);
        }
      };

      // Start animation loop initially
      animationLoop();
    }
  }
}


}
</script>

<style lang="scss">

@import './assets/sass/mediaqueries.scss';
@import './assets/sass/vars.scss';
@import "https://use.typekit.net/ekn5xco.css";

// @import "./assets/sass/mediaqueries.scss";

*{
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

  .container{
    // padding: 0 $init_padding;
    font-family: gloridot, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  //Loading screen :
  #loading_screen{
  height: 100vh;
  .title{
      left: 50%;
      position: absolute;
      top: 50%;
      text-align: center; 
      transform: translate(-50%, -50%);    

      //Title:
      h1{
        color: red;
        font-size: 5rem;
      }
    }
  }

  //Loading description :
  .is-typed span.typed {
    color: $primary-color;
    font-size: 3.5rem;
  } 

  //Header:
  #header{
    background-color: black;
    background-image: url('./public/img/noise.png');
    border-bottom: 1.2vh solid $primary-color;
    height: calc(100vh - 1.2vh); //100vh - border_bottom
    padding: 0 $init_padding;
    position: relative;

    .navbar{
      padding-top: 40px;
      ul{
      align-items: center;
      display: flex;
      flex-basis: 100%;
      justify-content: space-between;
      li{
        list-style-type: none;
        font-size: 3vw;
        a{
          color: $tertiary_color;
          text-decoration: underline;
          &:hover{
            color: $primary-color;
            transition: 1.0s;
          }
        }
        a#title{
            font-size: 6vw;
            color: $primary_color;
            text-decoration: none;

          span.highlight{
            color: $tertiary_color;
          }
        }
      }
      }
    }
    
    .title{
      color: $tertiary_color;
      width: calc(100% * 2/3);
      position: absolute;
      top: 55%;
      transform: translate(0, -50%);    

      h1{
        font-size: 8vw;
        font-weight: 400;
        width: 100%;
      }

      
      h2{
        font-size: 3vw;
        font-weight: 400;
        width: 100%;
        span:not(.Typewriter__wrapper){
          color: $primary_color;
        }
      }
    }

    img{
      height: auto;
      position: absolute;
      right: 10%;
      bottom: 0;
      width: 27.5%; 

    }

    #cta_circle{
      animation: bounce 2s ease-in-out infinite;
      background-color: $primary_color;
      border-radius: 50%;
      height: 75px;
      width: 75px;

      position: absolute;
      bottom: 0;
      left: 50%;
      text-align: center; 
      transform: translate(-50%, -50%);    

     img{
      top: 52.5%;
      left: 50%;
      transform: translate(-50%, -50%);
     }
    }
  }

  .background_text{
    color: $tertiary-color;
    font-size: 2rem;
    font-style: italic;
    font-weight: 400;
    letter-spacing: 4px;
    position: absolute;
    opacity: 0.1;
    text-decoration: none;
    bottom: 5px;
    left: 5px;
    text-align: center;

    &:hover{
      color: $primary-color;
      opacity: 0.5;
      transition: 0.5s;
    }
  }

  // .vertical_slider{
  //     background: none;
  //     background-color: $primary_color; 
  //     height: 100vh;
  //     position: absolute;
  //     right: 0;
  //     top: 0;
  //     width: calc(15vw - 2*$init_padding); //Width calculée par rapport au padding du header.
  //     .text_wrapper{
  //       height: 100%;
  //       overflow: hidden;
  //       position: relative;
  //       width: 100%;
  //       p{
  //         animation: scroll 10s linear infinite; // Applique l'animation de défilement
  //         color: $secondary_color;
  //         font-family: "gamay-expanded", sans-serif;  
  //         font-weight: 700;      
  //         font-size: 10rem;
  //         left: 40%;
  //         letter-spacing: -5px;
  //         position: absolute;
  //         top: 100%;
  //         text-align: center; 
  //         text-transform: uppercase;
  //         text-wrap: nowrap;
  //         transform: translate(-50%, -50%) rotate(90deg);    
  //         overflow: hidden;

  //       }
  //     }
  //   }

    // Animation de défilement
    @keyframes scroll {
      0% {
        left: 0;
      }
      100% {
        top: -90%;
      }
    }

    @keyframes bounce{
      0% {transform: translate(-50%, -50%) translateY(-5px);}
      50% {transform: translate(-50%, -50%) translateY(5px);}
      100% {transform: translate(-50%, -50%) translateY(-5px);}
    }
</style>
