<template>
  <div>
    <button @click="postStore.fetchPosts">Fetch Posts</button>
    <div v-if="postStore.loading">Loading...</div>
    <div v-if="postStore.error">{{ postStore.error }}</div>
    <ul v-if="postStore.posts.length">
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePostStore } from '../store3';

const postStore = usePostStore();
// if you destructure the properties (like posts, loading, and error) from the store, they lose their reactivity.

// Using computed
const posts = computed(() => postStore.posts);
// const loading = computed(() => postStore.loading);
// const error = computed(() => postStore.error);


onMounted(() => {
  postStore.fetchPosts();
});
</script>
