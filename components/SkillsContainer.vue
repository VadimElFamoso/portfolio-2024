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
    <p>Vous voulez en savoir plus ?</p>
    <button>Consultez mon cv</button>
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
    padding: 100px 25px;
    text-align: center;
      p{
        font-size: 3rem;
      }
      button{
        background-color: $fourth-color;
        border: none;
        border-radius: 25px;
        color: $tertiary-color;
        display: block;
        margin: auto;
        padding: 10px 10px;
        width: 10%;
      }
  }
</style>