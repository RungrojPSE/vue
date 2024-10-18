<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.id;
</script>

<template>
    <h2>User View</h2>
  <div>
    <h1>User ID: {{ userId }}</h1>
  </div>
</template>


