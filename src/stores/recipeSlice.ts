import { StateCreator } from "zustand";

import { getCategories } from "../services/RecipeService";
import type { Categories } from "../types";

export type RecipiesSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>;
};

// This is a slice of the store that manages the recipe categories
export const createRecipeSlice: StateCreator<RecipiesSliceType> = (set) => ({
  // Initial state for categories
  categories: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
});
