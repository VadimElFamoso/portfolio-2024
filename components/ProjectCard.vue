<template>
  <div class="project_card">
    <img :src="imageUrl" alt="">
    <div class="project_info">
      <div class="project_info_wrapper">
        <h2>{{ project_title }}</h2>
        <span>{{ project_date }}</span>
        <p>{{ project_category }}</p>
      </div>
      <a href="">En savoir plus.</a>
    </div>
  </div>
</template>

<script>
async function resolveImage(name) {
  const module = await import(`~/assets/img/${name}`);
  return module.default;
}

export default {
    name: 'ProjectCard',
    props: {
    project_title: {
      type: String,
      required: true
    },
    project_date: {
      type: String,
      required: false,
      default: ''
    },
    project_category: {
      type: String,
      required: false,
      default: ''
    },
    project_image: {
      type: String,
      required: true
    }
    },
    computed: {
    imageUrl() {
      return `/img/${this.project_image}`;
    }
  }
}



</script>

<style lang="scss">

@import '../public/sass/vars.scss';

    .project_card{
        display: flex;     
        flex-direction: column;
        //gap:
        height: fit-content;
        width: calc(30% - 25px);

        img{
          height: auto;
          width: 100%;
        }

      .project_info{
        align-items: center;
        background-color: $fourth_color;
        // border-radius: 0 0 25px 25px;
        color: $tertiary_color;
        padding: 10px 10px;
        display: flex;

        a{
          color: $primary_color;
          font-family: "gamay-expanded", sans-serif;  
          font-weight: 700;    
          text-align: center;
          text-decoration: underline;
          width: 35%;
          &::before{
            content: '> ';
          }
        }

        .project_info_wrapper{
          width: 65%;
        }

        h2{
          font-family: "gamay-expanded", sans-serif;  
          font-weight: 700;    
          width: inherit;
        }

        span{
          font-family: "gamay-wide", sans-serif; 
          letter-spacing: 10px; 
          font-weight: 100;  
          font-style: italic;  
        }

        p{
          font-family: "gamay", sans-serif;  
          font-weight: 100;  
        }
      }
    }
</style>