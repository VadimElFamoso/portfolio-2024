<template>
  <footer>
    <div class="footer">
        <div class="text_wrapper">
          <div class="text_container">
            <h2>Portfolio 2024 x<img src="../public/img/logo_codecorp.png" alt="Logo CodeCorp"></h2> 
            <p></p>
          </div>
          <div class="nav_container">
            <a href="#skills_container">.skills()</a>
            <a href="#projects_container">.projects()</a>
            <a href="#blog_container">.blog()</a>
            <a href="#contact_container">.contact()</a>
            <a href="mentions_legales.html">Mentions légales</a>
            <a href="">Portfolio de Loulou &#10084;</a>
          </div>
          <div class="copyright_container">
            <p>Khenfer Vadim - 2024©</p>
          </div>
        </div>

        
    </div>

  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './public/sass/vars.scss';
    .footer{
        background-color: black;
        background-image: url('../public/img/noise.png');
        position: relative;

        .text_wrapper{
          align-items: center;
          color: $tertiary-color;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          height: inherit;
          justify-content: space-around;

          font-family: 'gamay-wide', sans-serif;
          text-align: center;
          text-transform: uppercase;
          gap: 20%;
          padding: 100px 50px;

          .text_container h2{
            font-size: 2rem;
            font-family: 'gamay-wide', sans-serif;
            font-weight: 400;
            letter-spacing: 10px;
            margin-bottom: 5px;
            padding: 25px 0;

            img{
              height: auto;
              margin-bottom: -10px;
              margin-right: 20px;
              width: 25%;
            }
          }

          .nav_container{
            display: flex;
            flex-direction: column;
            gap: 5px;

            a{
            color: white;
            &:last-child{
              margin-top: 10px;
              color: $primary-color;
            }
            }
          }

          .copyright_container{
            bottom: 20px;
            font-size: 0.9rem;
            font-style: italic;
            opacity: 0.5;
            position: absolute;
          }
        }
    }
</style>