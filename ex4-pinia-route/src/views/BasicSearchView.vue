<script setup lang="ts">
import { usePostStore } from '../store/todo';
import { ref, watch } from 'vue';

const postStore = usePostStore();
const query = ref('');  // Local state for the input value

// Watch for changes in query and update the request in the store
watch(query, (newQuery) => {
  const id = parseInt(newQuery, 10);
  if (!isNaN(id)) postStore.setRequest(id);
});
</script>

<template>
  <div>
    <h1>Basic Search</h1>
    <p>This is the About Page.</p>
    <div>
      <h3>Basic Search</h3>
      <input v-model="query" placeholder="Enter query" />
      <button @click="postStore.fetchPost">Search</button>
      <button @click="postStore.fetchPost2(10)">Search1</button>
      <button @click="postStore.fetchPost2(1)">Search2</button>

      <p>{{ JSON.stringify(postStore.response, null, 2) }}</p>
    </div>

    <router-link to="/">Go to Home Page</router-link>
  </div>
</template>
