// src/stores/useUserStore.ts
import { defineStore } from 'pinia';

interface Address {
  road: string;
  city: string;
}
// Define your state type for type safety
interface UserState {
  name: string;
  age: number;
  addresses: Address[]
}

// Create the Pinia store
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: '',
    age: 0,
    addresses: [] as Address[]
  }),

  actions: {
    // Method to update the state and save to localStorage
    setUser() {
      this.saveStateToLocalStorage();
    },

    // Load state from localStorage if available
    loadStateFromLocalStorage() {
      const data = localStorage.getItem('user');
      if (data) {
        const parsedData = JSON.parse(data);
        console.log("load from local storage", parsedData)
        this.$patch(parsedData); // Patch the state with saved values
      }
    },

    // Save the current state to localStorage
    saveStateToLocalStorage() {
      console.log("save to local storage", this.$state)
      localStorage.setItem('user', JSON.stringify(this.$state));
    },
  },
});
