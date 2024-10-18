<template>
  <div>
    <h2>User Information</h2>
    <input v-model="userStore.name" placeholder="Enter your name" />
    <input type="number" v-model.number="userStore.age" placeholder="Enter your age" />

    <h3>Addresses</h3>
    <div v-for="(address, index) in userStore.addresses" :key="index">
      <input 
        v-model="address.road" 
        placeholder="Enter road" 
      />
      <input 
        v-model="address.city" 
        placeholder="Enter city" 
      />
      <button @click="removeAddress(index)">Remove</button>
    </div>

    <button @click="addAddress">Add Address</button>
    <button @click="userStore.setUser()">Save</button>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useUserStore } from '../stores/useUserStore';

const userStore = useUserStore();

// Watch for changes in the store and save to localStorage automatically
watch(
  () => userStore.$state,
  () => userStore.saveStateToLocalStorage(),
  { deep: true }
);

// Methods to add and remove addresses
function addAddress() {
  userStore.addresses.push({ road: '', city: '' });
}

function removeAddress(index: number) {
  userStore.addresses.splice(index, 1);
}
</script>
