<template>
  <div class="content" v-if="post">
    <h1>{{ post.acf.article_title }}</h1>
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

<style lang="scss">
@import '../../public/sass/vars.scss';

* {
    margin: 0;
    padding: 0;
}

.content{
  background-color: $secondary-color;
  height: 100vh;
  font-family: 'Gamay Editorial', sans-serif;
}

.article_content{
  color: $tertiary_color;
  display: block;
  margin: auto;
  width: 90%;

  p, li{
    font-size: 1vw;
  }
}

h1{
  color: $tertiary-color;
  display: block;
  font-size: 4vw;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  padding: 25px 0;
  width: 80%;
}

.wp-block-heading{
  color: $primary-color;
  font-size: 2.5vw;
}
</style>
