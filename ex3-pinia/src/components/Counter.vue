<!-- src/components/Counter.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'Counter',
  setup() {
    const store = useStore();

    return {
      count: store.count,
      doubleCount: store.doubleCount,
      increment: store.increment,
    };
  },
});
</script>
