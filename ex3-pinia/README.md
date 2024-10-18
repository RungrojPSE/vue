# Vue 3 + TypeScript + Vite

```bash
pnpm install pinia

```

```Vue {ex1}
<script setup lang="ts">
import SearchComponent from './components/SearchComponent.vue';
// import GetPosts from './components/GetPosts.vue';

</script>

<template>
  <SearchComponent/>
  <!-- <GetPosts /> -->
</template>

```

```Vue {ex2}
<script setup lang="ts">
// import SearchComponent from './components/SearchComponent.vue';
import GetPosts from './components/GetPosts.vue';

</script>

<template>
  <!-- <SearchComponent/> -->
  <GetPosts />
</template>

```
