// src/store/search.ts
import { defineStore } from 'pinia';

// Define the TypeScript types
type BasicSearchQueryType = "chemicalName" | "formula" | "smiles";

interface BasicSearch {
  query: string;
  queryType: BasicSearchQueryType;
  matchExactly: boolean;
}

interface SearchState {
  basicSearch: BasicSearch;
}




// Define the Pinia store
export const useBasicSearchStore = defineStore('search', {
  state: (): SearchState => ({
    basicSearch: {
      query: "",
      queryType: "formula",
      matchExactly: false,
    },
  }),
  actions: {
    setBasicSearch(query: string, queryType: BasicSearchQueryType, matchExactly: boolean) {
      this.basicSearch = { query, queryType, matchExactly };
    },
  },
});

