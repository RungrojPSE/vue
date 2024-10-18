<!-- src/components/SearchComponent.vue -->
<template>
  <div>
    <h3>Basic Search</h3>
    <input v-model="basicQuery" placeholder="Enter query" />
    <select v-model="basicQueryType">
      <option value="chemicalName">Chemical Name</option>
      <option value="formula">Formula</option>
      <option value="smiles">Smiles</option>
    </select>
    <label>
      <input type="checkbox" v-model="matchExactly" />
      Match Exactly
    </label>

    <button @click="updateBasicSearch">Search</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSearchStore } from '../store2';

// Access the Pinia store
const searchStore = useSearchStore();

// Reactive references
const basicQuery = ref(searchStore.basicSearch.query);
const basicQueryType = ref(searchStore.basicSearch.queryType);
const matchExactly = ref(searchStore.basicSearch.matchExactly);

// Log the store data when the component is mounted
onMounted(() => {
  console.log(searchStore.basicSearch);
  console.log("Advanced Search:", searchStore.advancedSearch);
});

// Update method
const updateBasicSearch = () => {
  searchStore.setBasicSearch(basicQuery.value, basicQueryType.value, matchExactly.value);
  console.log("Updated Basic Search:", searchStore.basicSearch);
};
</script>
