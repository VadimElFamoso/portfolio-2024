<template>
  <div id="skills_container">
    <div class="text_container">
      <div class="text active">
        <p>Développeur</p>
        <p>Fullstack</p>
        <p>VueJS Nuxt </p>
      </div>
      <div class="text">
        <p>Développeur</p>
        <p>Fullstack</p>
        <p>VueJS Nuxt </p>
      </div>
      <div class="presentation active">
        <p>Pour des applications web performantes et exigentes.</p>
      </div>
    </div>

    <div class="resume_container">
      <img src="../public/img/lake.jpg" alt="">
    </div>
  </div>

  <div class="cta_cv">
    <p>Vous voulez en savoir plus ?</p>
    <div class="cv_container">
      <a href="/pdf/cv_khenfer_vadim.pdf">Télécharger mon cv</a>
      <a href="/pdf/resume_khenfer_vadim.pdf">Download my resume</a>
    </div>
  </div>
  

</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../public/sass/vars.scss';

  #skills_container{
    align-items: center;
    background-color: $primary-color;
    display: flex;
    font-family: 'gamay-wide', sans-serif;
    font-size: 6rem;
    font-weight: 700;
    height: 100vh;
    padding: 50px 50px;
    text-transform: uppercase;

    .text_container{
      width: 50%;

      .text.active{
        display: block;
      }

      p{
      display: block;
      font-size: 4vw;
      }

      .text{
        display: none;
      }

      .presentation.active{
        display: block;
        font-weight: 400;
        p{
        font-size: 2vw;
      }
      }

      .presentation{
        display: none;
      }
    }
    
    .resume_container{
      background-color: black;
      height: 100%;
      width: 50%;
      padding: 0;

      img{
        height: 100%;
        width: 100%;
      }
    }
  }

  .cta_cv{
    background-color: $primary-color;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-family: 'gamay-wide', sans-serif;
    padding: 100px 0;
    text-align: center;
    &::before{
          content: url("../public/devider.svg");
        }
      p{
        border: 2px solid red;
        font-size: 4vw;
        font-weight: 700;
        display: block;
        margin: auto;
        letter-spacing: 10px;
        text-transform: uppercase;
        width: 75%;
      }
      .cv_container{
        border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: auto;
        width: 50%;

        a{
        background-color: $fourth-color;
        border: none;
        border-radius: 50px;
        color: $tertiary-color;
        display: block;
        font-size: 1.5vw;
        font-family: 'gamay'; 
        font-weight: 100;
        margin: auto;
        padding: 25px 25px;
        text-decoration: none;
        width: 30%;
      }
    }
  }
</style>