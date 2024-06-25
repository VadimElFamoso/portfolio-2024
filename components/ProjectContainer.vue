<template>
  <div id="project_container">
    <div class="vertical_navbar">
      <svg class="vertical_line" xmlns="http://www.w3.org/2000/svg" width="2" height="100vh" viewBox="0 0 2 100">
        <line x1="0" y1="-200" x2="1" y2="10000" stroke="black" stroke-width="5"/>
      </svg>
      <ul>
        <a href="https://x.com/Vadim_dev" target="_blank"><img src="../public/svg/x.svg" alt="Logo de X (Twitter)"></a>
        <a href="https://discord.gg/TV6cp2erT5" target="_blank"><img src="../public/svg/discord.svg" alt="Logo de Discord"></a>
        <a href="https://github.com/VadimElFamoso" target="_blank"><img src="../public/svg/github.svg" alt="Logo de Github"></a>
        <a href="mailto:contact@vadim2k.dev" target="_blank"><img src="../public/svg/mail.svg" alt="Logo boîte mail"></a>
      </ul>
    </div>

    <div class="projects">
      <div id="category-0" class="project_wrapper active">
        <ProjectCard project_id="1" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="2" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="3" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="4" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="5" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="6" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
      </div>

      <div id="category-1" class="project_wrapper hidden">
        <ProjectCard project_id="7" project_title="Super Projet" project_date="Avril 2021" project_category="UI" project_image="project.jpg"/>
        <ProjectCard project_id="8" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="9" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="10" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="11" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="12" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
      </div>

      <div id="category-2" class="project_wrapper hidden">
        <ProjectCard project_id="13" project_title="Super projet" project_date="Avril 2021" project_category="Graphisme" project_image="project.jpg"/>
        <ProjectCard project_id="14" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="15" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="16" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="17" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
        <ProjectCard project_id="18" project_title="Super Projet" project_date="Avril 2021" project_category="Développement web" project_image="project.jpg"/>
      </div>
      <div class="project_category">
        <p>Développement web</p>
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
  let lastIndex = -1;

  const animateProjectCards = (wrapper) => {
    const projectCards = wrapper.querySelectorAll('.project_card');
    gsap.fromTo(projectCards, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2
    });
  };

  const updateCategoryAndProjects = (currentIndex, animate = true) => {
    if (currentIndex !== lastIndex) {
      lastIndex = currentIndex;

      // Mettre à jour le texte de la catégorie
      document.querySelector('.project_category p').textContent = categories_title[currentIndex];

      // Mettre à jour l'affichage des projects_wrapper
      document.querySelectorAll('.project_wrapper').forEach((wrapper, index) => {
        if (index === currentIndex) {
          wrapper.classList.add('active');
          wrapper.classList.remove('hidden');
          if (animate) {
            animateProjectCards(wrapper); // Ajouter l'animation lors de l'affichage du wrapper
          }
        } else {
          wrapper.classList.remove('active');
          wrapper.classList.add('hidden');
        }
      });
    }
  };

  gsap.to('.projects', {
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
        updateCategoryAndProjects(currentIndex);
      },
      onLeave: () => {
        const lastIndex = categories_title.length - 1;
        updateCategoryAndProjects(lastIndex, false); // Ne pas animer lors de la sortie
      },
      onLeaveBack: () => {
        updateCategoryAndProjects(0, false); // Ne pas animer lors de la sortie
      }
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
    position: relative;
    width: 10vw;

    svg{
      display: block;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      max-height: 65%;
    }

    ul {
      align-items: center;
      background-color: $primary-color;
      display: flex;
      gap: 10px;
      height: inherit;
      overflow: hidden;
      justify-content: flex-end;
      flex-direction: column;
      margin-top: auto;
    }

    ul a:first-child::before {
      // content: url('../assets/svg/line.svg');
      position: absolute;
      top: 20px;
      left: 20px;
    }

    ul a:last-child {
      margin: 25px 0;
    }
  }

  .projects {
    background-color: $fourth-color;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    width: calc(100vw - 10vw);

    .project_category {
      background-color: $fourth-color;
      color: $tertiary_color;
      position: absolute;
      bottom: 0;
      width: 100%;

      p {
        font-family: 'gamay-wide', sans-serif;
        font-size: 5.5vw;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        text-wrap: nowrap;
        opacity: 0.05;
      }
    }

    .project_wrapper.hidden {
      display: none;
    }

    .project_wrapper.active {
      background-color: $fourth-color;
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      height: 90%;
      justify-content: center;
      position: relative;

      .nav_left {
        background-color: $primary_color;
        height: 50px;
        position: absolute;
        top: 50%;
        left: calc(2vw + 50px); //Gestion du padding
        transform: translate(-50%, -50%);
        width: 50px;

        img {
          height: auto;
          width: 100%;
        }
      }

      .nav_right {
        background-color: $primary_color;
        height: 50px;
        position: absolute;
        top: 50%;
        right: calc(2vw);
        transform: translate(-50%, -50%);
        width: 50px;

        img {
          height: auto;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px){
    #project_container .projects .project_category{
      background: none;
      color: red;
      transform: rotate(90deg);
      height: auto;
      right: 25px;
      transform-origin: center;
      width: auto;
    }
    #project_container .projects .project_category p{
      opacity: 1;
    }
  }

/* Responsive Design */
@media (max-width: 768px) {
  #project_container {
    flex-direction: column;

    .vertical_navbar {
      height: 10vh;
      width: 100vw;

      ul {
        flex-direction: row;
        justify-content: center;
        gap: 50px;
      }
    }

    .projects {
      height: 90vh;
      width: 100vw;

      .project_wrapper.active {
        height: 85vh; /* Adjusted for smaller screen heights */
      }

      p.project_category {
        height: 5vh; /* Adjusted for smaller screen heights */
        font-size: 4vw;
      }
    }
  }
}
</style>
  