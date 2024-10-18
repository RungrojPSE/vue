<script setup lang="ts">
import { usePostStore } from '../store/todo2';

// Use the Pinia store instance
const postStore = usePostStore();

// Submit handler
const handleSubmit = () => {
  postStore.submitPost();
};

</script>

<template>
  <div class="post-form">
    <h2>Create Post</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="userId">User ID:</label>
        <input v-model="postStore.userId" id="userId" type="number" />
      </div>

      <div>
        <label for="title">Title:</label>
        <input v-model="postStore.title" id="title" type="text" />
      </div>

      <div>
        <label for="body">Body:</label>
        <textarea v-model="postStore.body" id="body"></textarea>
      </div>

      <button type="submit" :disabled="postStore.loading">Submit</button>
    </form>

    <div v-if="postStore.loading">Submitting...</div>
    <div v-if="postStore.error" class="error">{{ postStore.error }}</div>

    <div v-if="postStore.result">
      <h3>Result:</h3>
      <pre>{{ JSON.stringify(postStore.result, null, 2) }}</pre>
    </div>
  </div>
</template>

<style scoped>
.post-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.error {
  color: red;
}
</style>
