import { StateCreator } from "zustand";
import { favoritesSliceType } from "./favoritesSlice";
import Notification from "../components/Notification";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notification: Notification;

  showNotification: (payload: Pick<Notification, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & favoritesSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notification: {} as Notification,

  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });

    setTimeout(() => {
      get().hideNotification();
    }, 2500);
  },

  hideNotification: () => {
    set({
      notification: {} as Notification,
    });
  },
});
