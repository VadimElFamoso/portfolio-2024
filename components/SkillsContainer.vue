<template>
  <div class="skills_container">
    <h1>Portfolio</h1>
  </div>
  <div class="resume_container">
    <PdfObject url="../assets/pdf/cv.pdf" :options="{ page: 2 }"/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/sass/vars.scss';

  .skills_container{
    background-color: $primary-color;
    border: 2px solid red;
    height: 100vh;
  }

  .resume_container{

  }
</style>