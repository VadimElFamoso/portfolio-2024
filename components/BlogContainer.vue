<template>
  <div id="blog_container">
    <h1>Articles</h1>
    <div v-if="posts && posts.length > 0" class="articles">
      <div class="article" v-for="post in posts" :key="post.id">
        <h2>{{ post.title.rendered }}</h2>
        <div class="article_content" v-html="post.content.rendered"></div>
      </div>
    </div>
    <p v-else-if="posts && posts.length === 0">Aucun article trouvé.</p>
    <p v-else>Loading...</p> 
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app'

const { data: posts, error } = await useAsyncData('posts', () =>
  fetch('https://www.khenfer.but22.iutn.o2switch.site/wp-json/wp/v2/posts').then(res => res.json())
)

if (error.value) {
  console.error('An error occurred:', error.value)
}
</script>

<style lang="scss">
@import '../public/sass/vars.scss';

    #blog_container{
        background-color: $primary-color;
        height: 100vh;
    }
</style>