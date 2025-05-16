import { StateCreator } from "zustand";

import { Recepie } from "../types";

export type favoritesSliceType = {
  favorites: Recepie[];
  handleClickFavorite: (recepie: Recepie) => void;
};

export const createFavortiesSlice: StateCreator<favoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],

  handleClickFavorite: (recepie) => {
    if (
      get().favorites.some((favorite) => favorite.idDrink === recepie.idDrink)
    ) {
      set({
        favorites: get().favorites.filter(
          (favorite) => favorite.idDrink !== recepie.idDrink
        ),
      });
    } else {
      set({
        favorites: [...get().favorites, recepie],
      });
    }
  },
});
