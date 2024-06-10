<template>
  <footer>
    <div class="footer">
        <div class="text_wrapper">
          <p>Une réalisation de Khenfer Vadim</p>
          <p>code is poetry</p>
        </div>

        
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './assets/sass/vars.scss';
    .footer{
        background-color: $primary-color;
        height: 40vh;
        position: relative;

        .text_wrapper{
          bottom: 0;
          font-family: 'gamay-wide', sans-serif;
          font-weight: 100;
          position: absolute;
          text-align: center;
          width: 100%;
          padding: 25px 0;

          p{
            font-size: 2rem;
          }
        }
    }
</style>