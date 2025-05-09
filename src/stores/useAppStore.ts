import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createRecipeSlice, RecipiesSliceType } from "./recipeSlice";


export const useAppStore = create<RecipiesSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))