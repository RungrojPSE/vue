<!-- src/App.vue -->
<script setup lang="ts">
import { computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { baseAPI, domainName, personalKey } from './stores';


const formattedAPI = computed(() => `baseAPI: ${baseAPI}`); // Computed value
</script>

<template>
  <div>Hello</div>
  <div>{{ formattedAPI }}</div>
  <div>{{ `personalKey: ${personalKey}` }}</div>
  <div>{{ `domainName: ${domainName}` }}</div>
  <hr/>
  <HelloWorld msg="Vite + Vue" />
</template>
