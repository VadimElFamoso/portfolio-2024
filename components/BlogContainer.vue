<template>
  <div id="blog_container">
    <h2>Blog !</h2>
    <div v-if="posts && posts.length > 0" class="articles">
      <div class="article" v-for="post in posts" :key="post.id">
        <img src="../public/img/project.jpg" alt="">
        <!-- <img :src="post.acf.article_img" alt=""> -->
        <div class="article_text">
          <h3 class="article_title">{{ post.acf.article_title }}</h3>
          <p class="article_description">{{ post.acf.article_description }}</p>
          <p class="article_category">{{ post.acf.article_categories }}</p>
          <p class="article_date">Rédigé par {{ post.acf.article_author }} - {{ post.acf.article_date }}</p>
        </div>
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

#blog_container {
  background-color: $primary-color;
  height: auto;
  padding: 25px 25px;

  h2{
    font-family: 'Gamay-wide', sans-serif;
    font-size: 8vw;
    letter-spacing: 10px;
    padding: 50px 0;
  }
}

.articles {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  border: 3px solid orange;
}

.article {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  width: 100%; // Par défaut, les articles prennent toute la largeur
  border: 3px solid red;
  font-family: 'Gamay editorial', sans-serif;

  &:nth-child(1) {
    border: 3px solid yellow;
    justify-content: center;
    width: 100%; // Le premier article occupe toute la largeur

    img {
      width: 50%;
    }

    h3.article_title{
      font-family: 'Gamay-wide', sans-serif;
      font-size: 3.5vw;
    }

    p.article_description {
    font-size: 2vw;
    }

    p.article_category {
      font-size: 1vw;
    }
  }

  img {
    height: auto;
    width: 50%;
  }

  h3.article_title{
    font-size: 2vw;
    text-transform: uppercase;
  }

  p.article_description {
    font-size: 1.5vw;
  }

  p.article_category {
    font-size: 1.5rem;
  }
}

@media (min-width: 768px) {
  .article {
    width: 100%; // À partir de 768px, les articles prennent 48% de la largeur
  }
}

@media (min-width: 1024px) {
  .article {
    width: 48%; // À partir de 1024px, les articles prennent 48% de la largeur
  }

  .article:nth-child(1) {
    width: 100%; // Le premier article reste à 100% sur les grands écrans
  }
}

</style>