// src/store/search.ts
import { defineStore } from 'pinia';

// Define the TypeScript types
type BasicSearchQueryType = "chemicalName" | "formula" | "smiles";

interface BasicSearch {
  query: string;
  queryType: BasicSearchQueryType;
  matchExactly: boolean;
}

interface PropertyRange {
  name: string;
  min?: number;
  max?: number;
}

interface AdvancedSearch {
  solvent: string;
  solventType: number;
  propertyRanges: PropertyRange[];
}

interface SearchState {
  basicSearch: BasicSearch;
  advancedSearch: AdvancedSearch;
}

// Define the Pinia store
export const useSearchStore = defineStore('search', {
  state: (): SearchState => ({
    basicSearch: {
      query: "",
      queryType: "formula",
      matchExactly: false,
    },
    advancedSearch: {
      solvent: "acid",
      solventType: 1,
      propertyRanges: [
        { name: "Tm", min: 300, max: 400 },
        { name: "Tb", min: 300 },
        { name: "Pc" },
      ],
    },
  }),
  actions: {
    setBasicSearch(query: string, queryType: BasicSearchQueryType, matchExactly: boolean) {
      this.basicSearch = { query, queryType, matchExactly };
    },
    setAdvancedSearch(solvent: string, solventType: number, propertyRanges: PropertyRange[]) {
      this.advancedSearch = { solvent, solventType, propertyRanges };
    },
    addPropertyRange(range: PropertyRange) {
      this.advancedSearch.propertyRanges.push(range);
    },
  },
});

