<template>
  <div class="project_card">
    <img src="../assets/img/project.jpg" alt="">
    <div class="project_info">
      <div class="project_info_wrapper">
        <h2>{{ project_title }}</h2>
        <span>{{ project_date }}</span>
        <p>{{ project_description }}</p>
      </div>
      <a href="">En savoir plus.</a>
    </div>
  </div>
</template>

<script>
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
    project_description: {
      type: String,
      required: false,
      default: ''
    }
  }

}
</script>

<style lang="scss">

@import '../assets/sass/vars.scss';

    .project_card{
        display: flex;
        flex-direction: column;
        //gap:
        height: calc(50% - 25px);
        width: calc(33% - 30px);

        img{
          width: 100%;
        }

      .project_info{
        align-items: center;
        background-color: $fourth_color;
        border-radius: 0 0 25px 25px;
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
          font-family: "gamay", sans-serif;  
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