import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createRecipeSlice, RecipiesSliceType } from "./recipeSlice";
import { favoritesSliceType, createFavortiesSlice } from "./favoritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


// Slice patern 
export const useAppStore = create<RecipiesSliceType & favoritesSliceType & NotificationSliceType>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavortiesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
