<template>
    <div class="content" v-if="post">
    <p>{{ project_category }}</p>
    <h1>{{ post.acf.article_title }}</h1>
    <h2> {{  post.acf.article_description }}</h2>
    <span>Rédigé par Khenfer Vadim le {{ post.acf.article_date }}</span>
    <div class="article_content" v-html="post.content.rendered"></div>
  </div>
  <div v-else-if="error">
    <p>Une erreur s'est produite : {{ error.message }}</p>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>

<script setup>
import { useAsyncData, useRoute } from 'nuxt/app'

const route = useRoute()
const { data: post, error } = await useAsyncData(`post-${route.params.id}`, () =>
  fetch(`https://www.khenfer.but22.iutn.o2switch.site/wp-json/wp/v2/posts/${route.params.id}`).then(res => res.json())
)

if (error.value) {
  console.error('An error occurred:', error.value)
}
</script>

<style scoped lang="scss">
@import '../../public/sass/vars.scss';

* {
    margin: 0;
    padding: 0;
}

.content{
  background-color: $secondary-color;
  background-image: url(../../public/img/noise.png);
  font-family: 'Gamay Editorial', sans-serif;
  min-height: 100vh;

  p{
    color: $tertiary_color;
  }

  h1{
    color: $tertiary-color;
    display: block;
    font-size: 4vw;
    margin: auto;
    text-transform: uppercase;
    padding: 50px 0;
    width: 90%;
  }

  h2{
    color: $tertiary_color;
    display: block;
    font-size: 2vw;
    margin: auto;
    opacity: 0.5; 
    width: 90%;
  }

  span{
    border-bottom: 2px solid white;
    color: $tertiary_color;
    display: block;
    font-size: 2rem;
    margin: auto;
    opacity: 0.25;
    padding-bottom: 15px;
    width: 90%;
  }
  img{
    height: auto;
    width: 20%;
  }
}

.article_content{
  color: $tertiary_color;
  display: block;
  margin: auto;
  width: 90%;

  h3{
    color: $primary_color;
    font-size: 2.5vw;
    padding: 25px 0;
    text-decoration: underline;
  }

  p, li{
    font-size: 1.5vw;
    font-weight: 100;
  }
}

// .wp-block-heading{
//   color: $primary-color;
//   font-size: 5vw;
// }
</style>
