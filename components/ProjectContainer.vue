<template>
    <div id="project_container">
      <!--Todo: Transformer la vertical navbar en composant-->
      <div class="vertical_navbar">
        <ul>
            <a href="https://x.com/Vadim_dev" target="_blank"><img src="../assets/svg/x.svg" alt="Logo de X (Twitter)"></a>
            <a href="https://discord.gg/TV6cp2erT5" target="_blank"><img src="../assets/svg/discord.svg" alt="Logo de Discord"></a>
            <a href="https://github.com/VadimElFamoso" target="_blank"><img src="../assets/svg/github.svg" alt="Logo de Github"></a>
            <a href="mailto:contact@vadim2k.dev" target="_blank"><img src="../assets/svg/mail.svg" alt="Logo boîte mail"></a>
        </ul>
      </div>
  
      <div class="projects">
        <p class="project_category">Développement web</p>
        <div class="project_wrapper">
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="../assets/img/project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="../assets/img/project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="../img/project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="../img/project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="../img/project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="../img/project.jpg"/>


        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProjectCard from '../components/ProjectCard.vue';
  export default {
      name: 'ProjectContainer',
      components:{
        ProjectCard
      }
  }
  </script>
  
  <style lang="scss">
  @import '../assets/sass/vars.scss';
  
  #project_container {
      display: flex;
      height: 100vh;
  
      .vertical_navbar {
        background-color: $primary-color;
        height: 100vh;
        width: 10vw;

        ul{
            align-items: center;
            display: flex;
            gap: 10px;
            height: inherit;
            justify-content: flex-end;
            flex-direction: column;
            margin-top: auto;
        }

        ul a:first-child::before{
          // content: url('../assets/svg/line.svg');
          position: absolute;
          top: 20px;
          left: 20px;
        }

        ul a:last-child {
            margin: 25px 0;
        }
        
      }
      //
      .projects{
        background-color: red;
        height: 100vh;
        position: relative;
        width: 90vw;

        .project_category{
          color: $tertiary_color;
          font-family: 'gamay-wide', sans-serif;
          font-size:  5.5vw;
          font-weight: 700;
          position: absolute;
          right: 10px;
          bottom: 10px;
          opacity: 0.05;
          text-align: center;
          text-transform: uppercase;
          text-wrap: nowrap;
          width: 100%;
        }

        .project_wrapper{
          background-color: $fourth-color;
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
          padding: 25px;
          height: calc(100vh - 50px);
          width: calc(90vw - 50px);
        }
      }
  }
  </style>
  