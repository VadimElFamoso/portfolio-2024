<template>
  <div class="skills_container">
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
      <img src="../assets/img/lake.jpg" alt="">
    </div>
  </div>

  <div class="cta_cv">
    <p>Bonjour</p>
  </div>
  

</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/sass/vars.scss';

  .skills_container{
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
      font-size: 5rem;
      }

      .text{
        display: none;
      }

      .presentation.active{
        display: block;
        font-weight: 400;
        p{
        font-size: 2rem;
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
</style>