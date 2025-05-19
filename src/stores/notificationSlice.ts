import { StateCreator } from "zustand";
import { favoritesSliceType } from "./favoritesSlice";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text'|'error'>) => void

}


export const createNotificationSlice: StateCreator<NotificationSliceType & favoritesSliceType, [], [], NotificationSliceType> = ( set ) => ({
    notification : {} as Notification,

    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
    }
})