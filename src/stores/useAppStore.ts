import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createRecipeSlice, RecipiesSliceType } from "./recipeSlice";
import { favoritesSliceType, createFavortiesSlice } from "./favoritesSlice";


// Slice patern 
export const useAppStore = create<RecipiesSliceType & favoritesSliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavortiesSlice(...a),
  }))
);
