import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createRecipeSlice, RecipiesSliceType } from "./recipeSlice";
import { favoritesSliceType, createFavortiesSlice } from "./favoritesSlice";
import {
  createNotificationSlice,
  NotificationSliceType,
} from "./notificationSlice";
import { AISlice, createAISlice } from "./AISlice";

// Slice patern
export const useAppStore = create<
  RecipiesSliceType & favoritesSliceType & NotificationSliceType & AISlice
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavortiesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  }))
);
