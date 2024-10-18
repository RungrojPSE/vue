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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSearchStore } from '../store2';

export default defineComponent({
  name: 'SearchComponent',
  setup() {
    const searchStore = useSearchStore();
    
    // Reactive references
    const basicQuery = ref(searchStore.basicSearch.query);
    const basicQueryType = ref(searchStore.basicSearch.queryType);
    const matchExactly = ref(searchStore.basicSearch.matchExactly);

    // Update method
    const updateBasicSearch = () => {
      searchStore.setBasicSearch(basicQuery.value, basicQueryType.value, matchExactly.value);
    };

    return {
      basicQuery,
      basicQueryType,
      matchExactly,
      updateBasicSearch,
    };
  },
});
</script>
