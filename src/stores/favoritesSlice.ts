import { StateCreator } from "zustand";

import { Recepie } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";


export type favoritesSliceType = {
  favorites: Recepie[];

  favoriteExist: (id: Recepie["idDrink"]) => boolean;
  handleClickFavorite: (recepie: Recepie) => void;
  loadFromStorage: () => void;
};

export const createFavortiesSlice: StateCreator<favoritesSliceType & NotificationSliceType, [], [], favoritesSliceType> = (
  set,
  get,
  api
) => ({
  favorites: [],

  loadFromStorage: () => {
    const storeFavorites = localStorage.getItem("favorites");

    if (storeFavorites) {
      set({
        favorites: JSON.parse(storeFavorites),
      });
    }
  },

  favoriteExist: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },

  handleClickFavorite: (recepie) => {
    if (get().favoriteExist(recepie.idDrink)) {
      set({
        favorites: get().favorites.filter(
          (favorite) => favorite.idDrink !== recepie.idDrink
        ),
      })
      createNotificationSlice(set, get, api ).showNotification({
        text: "Se elimino de favoritos",
        error: false,
      });
      
    } else {
      set({
        favorites: [...get().favorites, recepie],
      });
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agrego a favoritos",
        error: true
      });
    }

    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
});
