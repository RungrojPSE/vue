<script setup lang="ts">
import { usePostStore } from '../store/todo';
const postStore = usePostStore();


</script>

<template>
  <div>
    <h1>Home Page</h1>
    <button @click="postStore.setRequest(10)">Set ID</button>
    <router-link to="/basic-search">Go to Basic Search</router-link>
    <router-link to="/advanced-search">Go to Basic Search</router-link>
    <br />
  </div>
</template>
