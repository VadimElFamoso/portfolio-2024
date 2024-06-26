<template>
  <div class="project_card">
    <img :src="imageUrl" alt="">
    <div class="project_info">
      <div class="project_info_wrapper">
        <h2>{{ project_title }}</h2>
        <span>{{ project_date }}</span>
        <p>{{ project_category }}</p>
      </div>
      <a href="#" @click.prevent="openModal">En savoir plus.</a>
    </div>
    
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ project_title }}</h2>
        <p>Voici plus d'informations sur le projet...</p>
        <!-- Ajoutez plus de contenu ici -->
      </div>
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
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    imageUrl() {
      return `/img/${this.project_image}`;
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};



</script>

<style lang="scss">
@import '../public/sass/vars.scss';

.project_card {
  display: flex;     
  flex-direction: column;
  height: fit-content;
  width: calc(30% - 25px);

  img {
    height: auto;
    width: 100%;
  }

  .project_info {
    align-items: center;
    background-color: $fourth_color;
    color: $tertiary_color;
    padding: 10px 10px;
    display: flex;

    a {
      color: $primary_color;
      font-family: "gamay-expanded", sans-serif;  
      font-weight: 700;    
      text-align: center;
      text-decoration: underline;
      width: 35%;
      &::before {
        content: '> ';
      }
    }

    .project_info_wrapper {
      width: 65%;
    }

    h2 {
      font-family: "gamay-expanded", sans-serif;  
      font-weight: 700;    
      width: inherit;
    }

    span {
      font-family: "gamay-wide", sans-serif; 
      letter-spacing: 10px; 
      font-weight: 100;  
      font-style: italic;  
    }

    p {
      font-family: "gamay", sans-serif;  
      font-weight: 100;  
    }
  }

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;

    .modal-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      width: 80%;
      max-width: 600px;
      position: relative;

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .project_card {
    width: calc(50% - 25px);

    img {
      width: 100%;
    }
  }
}
</style>
