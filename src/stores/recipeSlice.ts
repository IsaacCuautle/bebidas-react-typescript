import { StateCreator } from "zustand";

import { getCategories, getRecipies, getRecipieByID } from "../services/RecipeService";
import type { Categories, Drink, Drinks, SearchFilters } from "../types";

export type RecipiesSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipies: (SearchFilters: SearchFilters) => Promise<void>;
  selectRecepie: (id: Drink['idDrink']) => Promise<void>;
};

// This is a slice of the store that manages the recipe categories
export const createRecipeSlice: StateCreator<RecipiesSliceType> = (set) => ({
  // Initial state for categories
  categories: {
    drinks: [],
  },

  drinks: {
    drinks: [],
  },

  // Function to fetch categories from the API
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },

  // Function to search for recipes based on filters
  searchRecipies: async (SearchFilters) => {
    const drinks = await getRecipies(SearchFilters);
    set({ drinks });
  },
  
  // Function to search for recipes based on filters
  selectRecepie: async (id) => {
    const details = await getRecipieByID(id);
    console.log(details);
    
  },


});
