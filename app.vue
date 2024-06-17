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
        <h2>Etudiant en B.U.T MMI : parcours <br><span>developpement web & dispositifs interactifs.</span></h2>
      </div>

      <img src="./assets/img/vadim_header.png" alt="Image de Khenfer Vadim détourée">
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
  <SkillsContainer/>
  <Footer/>

</template>

<script>
import ProjectContainer from './components/ProjectContainer.vue'
import CtaContainer from './components/CtaContainer.vue'
import SkillsContainer from './components/SkillsContainer.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    ProjectContainer,
    CtaContainer,
    SkillsContainer,
    Footer
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
        color: $primary_color;
        font-size: 3rem;
      }
      //Loading description :
      p{
        color: $tertiary_color;
        font-size: 95px;
      }
    }
  }

  //Header:
  #header{
    background-color: black;
    background-image: url('./assets/img/noise.png');
    border-bottom: 1.2vh solid $primary-color;
    height: 98.8vh;
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

        }
        a#title{
            font-size: 6vw;
            color: $primary_color;
            text-decoration: none;
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
      background: none;
      height: auto;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 38%; 
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
