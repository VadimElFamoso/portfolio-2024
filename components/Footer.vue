<template>
  <footer>
    <div class="footer">
        <div class="text_wrapper">
          <h2>Portfolio 2024</h2>
          <p>Une réalisation de Khenfer Vadim x<img src="../assets/img/logo_codecorp.png" alt="Logo CodeCorp"></p> 
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
        background-color: black;
        background-image: url('../assets/img/noise.png');
        height: 40vh;
        position: relative;

        .text_wrapper{
          color: $tertiary-color;
          font-family: 'gamay-wide', sans-serif;
          font-weight: 100;
          letter-spacing: 5px;
          text-align: center;
          text-transform: uppercase;
          width: 100%;
          padding: 25px 0;

          h2{
            font-size: 5vw;
            opacity: 0.2;
            text-align: center;
            width: 100%;
          }

          p{
            font-size: 2rem;
            margin-bottom: 5px;

            img{
              height: auto;
              width: 20%;
              margin-bottom: -10px;
              margin-right: 20px;
            }
          }
        }
    }
</style>