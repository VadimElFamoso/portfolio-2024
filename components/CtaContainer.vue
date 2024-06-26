<template>
  <div class="cta_container">
    <div class="cta_info">
        <p>Une idée, un projet ? Contactez CodeCorp.</p>
        <div class="cta_nav">
            <a href="mailto:khenfer3u@gmail.com">Mail.</a>
            <a href="tel:0329543292">Tel.</a>
            <a href="https://discord.gg/n2tVWAn3XM" target="_blank">Discord.</a>
        </div>
    </div>
    <div class="cta_img">
        <img src="../public/img/logo_codecorp.png" alt="Logo de CodeCorp">
    </div>
  </div>
</template>

<script>
export default {

}

import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {

    const scroll = 500;

    gsap.to('.cta_container', {
    scrollTrigger: {
        trigger: "#project_container",
        start: `top top`,
        end: 'bottom bottom',
        markers: true,
        x: 200,
    },

    });
});

</script>

<style scoped lang="scss">
@import '../public/sass/vars.scss';

.cta_container {
  align-items: center;
  background-color: $fourth_color;
  display: flex;
  flex-direction: column; // Par défaut, en colonne pour les petits écrans
  height: auto; // Par défaut, auto pour s'ajuster au contenu
  justify-content: center;
  padding: 25px;

  .cta_info {
    color: $tertiary_color;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    width: 100%; // Prend toute la largeur sur les petits écrans

    .cta_nav {
      display: flex;
      flex-direction: row; // En colonne sur les petits écrans
      align-items: center;
      font-family: "gamay", sans-serif;
      font-size: 1rem;
      font-weight: 400;
      gap: 50px;
      text-transform: uppercase;
    }

    p {
      font-size: 3vw; // Plus grand sur les petits écrans
      font-family: "gamay-expanded", sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      text-align: left; // Centrer le texte sur les petits écrans
    }

    a {
      color: white;
      text-align: center;
    }
  }

  .cta_img {
    width: 100%; // Prend toute la largeur sur les petits écrans
    display: flex;
    justify-content: center;
    margin-top: 20px; // Ajouter un espace entre l'image et le texte

    img {
      width: 75%;
      height: auto;
    }
  }
}

@media (min-width: 1024px) {
  .cta_container .cta_info p{
      font-size: 3vw; // Ajuster la taille du texte
  }
}

@media (min-width: 768px) {
  .cta_container {
    flex-direction: row; // En ligne pour les écrans moyens et plus grands
    height: 25vh;
    padding: 25px 125px;
  }

  .cta_info {
    width: 50%; // Prend 50% de la largeur sur les écrans moyens et plus grands

    .cta_nav {
      flex-direction: row; // En ligne pour les écrans moyens et plus grands
      gap: 50px;
    }

    p {
      font-size: 3vw; // Ajuster la taille du texte
      text-align: center; // Alignement à gauche
    }

    a {
      text-align: left; // Alignement à gauche
    }
  }

  .cta_img {
    width: 50%; // Prend 50% de la largeur sur les écrans moyens et plus grands
    margin-top: 0; // Supprimer l'espace ajouté pour les petits écrans

    img {
      width: 75%; // Ajuster la largeur de l'image
    }
  }
}


</style>