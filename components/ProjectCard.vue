<template>
  <div class="project_card">
    <div class="image-container">
      <img :src="imageUrl" alt="">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2>{{ project_title }}</h2>
          <p>{{ project_description }}</p>
          <!-- Ajoutez plus de contenu ici -->
        </div>
      </div>
    </div>
    <div class="project_info">
      <div class="project_info_wrapper">
        <h2>{{ project_title }}</h2>
        <span>{{ project_date }}</span>
        <p>{{ project_category }}</p>
      </div>
      <a href="#" @click.prevent="openModal">En savoir plus.</a>
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
    project_description: {
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

<style scoped lang="scss">
@import '../public/sass/vars.scss';

.project_card {
  display: flex;
  flex-direction: column;
  height: fit-content;
  opacity: 0;
  width: calc(30% - 25px);

  .image-container {
    position: relative;
    width: 100%;

    img {
      height: 250px;
      object-fit: cover;
      width: 100%;
    }

    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1000;

      .modal-content {
        background-color: $primary-color;
        padding: 20px;
        border-radius: 5px;
        width: 80%;
        max-width: 600px;
        position: relative;

        h2 {
          font-family: 'Gamay-wide', sans-serif;
          font-size: 1vw;
          text-transform: uppercase;
        }

        p {
          font-family: 'Gamay Editorial';
          font-size: 0.75vw;
          color: $secondary-color;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
          color: $secondary-color;
        }
      }
    }
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
}

@media (max-width: 768px) {
  .project_card {
    width: calc(50% - 25px);

    .image-container img {
      height: 200px !important;
    }
  }

  .project_info_wrapper{
    h2{
      text-decoration: underline;
      font-size: 1.2rem;
    }
    span{
      font-size: 0.7rem;
    }
    p{
      font-size: 0.7rem;
    }
  }

  .project_info a{
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 1024px) {
  .project_card {
    width: calc(50% - 25px);

    .image-container img {
      height: 125px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .project_card {
    width: calc(50% - 25px);

    .image-container img {
      height: 150px;
    }
  }
}
</style>
