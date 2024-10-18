// src/store/index.ts
import { defineStore } from 'pinia';

// Define a store using `defineStore`
export const useStore = defineStore({
  id: 'main',
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

