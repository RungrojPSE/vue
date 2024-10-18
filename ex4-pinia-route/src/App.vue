<script setup lang="ts">

</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home </RouterLink>
    <RouterLink to="/basic-search">Go to basic search </RouterLink>
    <RouterLink to="/advanced-search">Go to advanced search</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>