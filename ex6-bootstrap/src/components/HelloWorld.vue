<template>
  <div class="container mt-5">
    <h1>Hello Bootstrap in Vue!</h1>

    <!-- Bootstrap Button -->
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Toggle Content
    </button>

    <!-- Collapsible Content -->
    <div class="collapse mt-3" id="collapseExample">
      <div class="card card-body">
        This content is controlled by Bootstrap's JS!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style scoped>
/* Optional custom styling */
.container {
  text-align: center;
}
</style>
