<template>
  <div class="cta_container">
    <div class="cta_info">
        <p>Une idée, un projet ? Contactez CodeCorp.</p>
        <div class="cta_nav">
            <a href="">Mail.</a>
            <a href="">Tel.</a>
            <a href="">Créer un devis.</a>
        </div>
    </div>
    <div class="cta_img">
        <img src="../assets/img/logo_codecorp.png" alt="Logo de CodeCorp">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../assets/sass/vars.scss';


    .cta_container{
        align-items: center;
        background-color: $fourth_color;
        display: flex;
        height: 25vh;
        justify-content: center;
        padding: 25px 125px;

        .cta_info{
            color: $tertiary_color;
            display: flex;
            gap: 10px;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            width: 50%;

            .cta_nav{
                display: flex;
                font-family: "gamay", sans-serif;
                font-size: 1rem;
                font-weight: 400; 
                gap: 50px;
                text-transform: uppercase;
            }

            p{
              font-size: 3rem;  
              font-family: "gamay-expanded", sans-serif;  
              font-weight: 700;      
              text-transform: uppercase;    
            }

            a{
                color: white;
            }
        }

        .cta_img{
            height: 100%;
            position: relative;
            width: 50%;

            img{
                height: auto;
                position: relative;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
            }
        }
    }

</style>