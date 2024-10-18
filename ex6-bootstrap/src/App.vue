<template>
  <div id="app">
    <HelloWorld/>
    <!-- <button class="btn btn-primary" @click="showModal">Open Modal</button> -->
    <Modal/>
    <Modal2/>
    <Modal3/>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Modal from './components/Modal.vue';
import Modal2 from './components/Modal2.vue';
import Modal3 from './components/Modal3.vue';

// const isModalVisible = ref(false);

// const showModal = () => {
//   isModalVisible.value = true;
// };
</script>
