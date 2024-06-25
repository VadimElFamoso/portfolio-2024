<template>
  <div>
    <h1>Projet {{ projectId }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const projectId = route.params.id;
</script>

<style>

</style>