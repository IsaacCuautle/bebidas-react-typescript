import { StateCreator } from "zustand";

import {
  getCategories,
  getRecipies,
  getRecipieByID,
} from "../services/RecipeService";

import type {
  Categories,
  Drink,
  Drinks,
  Recepie,
  SearchFilters,
} from "../types";

export type RecipiesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecepie: Recepie;
  modal: boolean;

  fetchCategories: () => Promise<void>;
  searchRecipies: (SearchFilters: SearchFilters) => Promise<void>;
  selectRecepie: (id: Drink["idDrink"]) => Promise<void>;
  closeModal: () => void;
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

  selectedRecepie: {} as Recepie,

  modal: false,

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
    const selectedRecepie = await getRecipieByID(id);
    set({ selectedRecepie, modal: true });
  },

  closeModal: () => {
    set({ modal: false, selectedRecepie: {} as Recepie });
  },
});
