<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const userId = ref('');
const router = useRouter();

function goToUserPage() {
  if (userId.value) {
    router.push(`/user/${userId.value}`);
  }
}
</script>

<template>
  <div>
    <h1>Test Page</h1>
    <p>This is the About Page.</p>
    <router-link to="/about">Go to About Page</router-link>
    <br />
    <p>Go to User Page.</p>
    <input v-model="userId" placeholder="Enter User ID" />
    <button @click="goToUserPage">Go</button>
  </div>
</template>
