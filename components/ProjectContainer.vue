<template>
    <div id="project_container">
      <!--Todo: Transformer la vertical navbar en composant-->
      <div class="vertical_navbar">
        <ul>
            <a href="https://x.com/Vadim_dev" target="_blank"><img src="../public/svg/x.svg" alt="Logo de X (Twitter)"></a>
            <a href="https://discord.gg/TV6cp2erT5" target="_blank"><img src="../public/svg/discord.svg" alt="Logo de Discord"></a>
            <a href="https://github.com/VadimElFamoso" target="_blank"><img src="../public/svg/github.svg" alt="Logo de Github"></a>
            <a href="mailto:contact@vadim2k.dev" target="_blank"><img src="../public/svg/mail.svg" alt="Logo boîte mail"></a>
        </ul>
      </div>
  
      <div class="projects">
        <p class="project_category">Développement web</p>
        <div class="project_wrapper active">
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        </div>

        <div class="project_wrapper hidden">
          <p class="project_category">Webdesign</p>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        </div>

        <div class="project_wrapper hidden">
          <p class="project_category">Audiovisuel</p>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
          <ProjectCard project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        </div>
      </div>
  </div>
  </template>

  
  <script setup>
    import { onMounted } from 'vue';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
  
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      let scroll = 6000;
      let categories_title = [
        'Développement web',
        'Webdesign',
        'Graphisme',
      ];
  
      // Calculer le nombre de changements de catégorie
      const numCategoryChanges = Math.ceil(scroll / 2000);
  
      gsap.to('.project_wrapper.active', {
        scrollTrigger: {
          trigger: "#project_container",
          start: 'top top',
          end: `+=${scroll}`,
          scrub: 1,
          pin: true,
          markers: true,
          onUpdate: (self) => {
            // Calculer l'index de la catégorie actuelle
            const currentIndex = Math.floor(self.progress * numCategoryChanges);
            // Mettre à jour le texte de la catégorie
            document.querySelectorAll('p.project_category').forEach((el, index) => {
              el.textContent = categories_title[currentIndex];
            });
          },
        },
      });
    });
  </script>
  





  
  
  <style lang="scss">
  @import '../public/sass/vars.scss';
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
        background-color: $fourth-color;
        height: 100vh;
        position: relative;
        width: 90vw;

        .project_category{
          color: $tertiary_color;
          font-family: 'gamay-wide', sans-serif;
          font-size:  5.5vw;
          font-weight: 700;
          position: absolute;
          bottom: 10px;
          opacity: 0.05;
          text-align: center;
          text-transform: uppercase;
          text-wrap: nowrap;
          width: 90vw;
        }

        .project_wrapper.hidden{
          display: none;
        }

        .project_wrapper.active{
          background-color: $fourth-color;
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
          padding: 25px;
          position: relative;
          width: calc(90vw - 50px);

            .nav_left{
              background-color: $primary_color;
              height: 50px;
              position: absolute;
              top: 50%;
              left: calc(2vw + 50px); //Gestion du padding
              transform: translate(-50%, -50%);
              width: 50px;

              img{
              height: auto;
              width: 1%;
            }
            }
            .nav_right{
              background-color: $primary_color;
              height: 50px;
              position: absolute;
              top: 50%;
              right: calc(2vw);
              transform: translate(-50%, -50%);
              width: 50px;

              img{
              height: auto;
              width: 1.5%;
            }
            }

        }
      }
  }
  </style>
  