// src/store/search.ts
import { defineStore } from 'pinia';

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

// Define the Pinia store
export const useAdvancedSearchStore = defineStore('search', {
  state: (): AdvancedSearch => ({
    solvent: "acid",
    solventType: 1,
    propertyRanges: [
      { name: "Tm", min: 300, max: 400 },
      { name: "Tb", min: 300 },
      { name: "Pc" },
    ],
  }),
  actions: {
    setAdvancedSearch(solvent: string, solventType: number, propertyRanges: PropertyRange[]) {
      this.solvent = solvent;
      this.solventType = solventType;
      this.propertyRanges = propertyRanges;
    },
    addPropertyRange(range: PropertyRange) {
      this.propertyRanges.push(range);
    },
  },
});
