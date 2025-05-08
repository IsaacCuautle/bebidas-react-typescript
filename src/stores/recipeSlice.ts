import { StateCreator } from "zustand"

type Category = {

}

export type RecipiesSliceType = {
    categories: Category[]
}

// This is a slice of the store that manages the recipe categories
export const createRecipeSlice : StateCreator<RecipiesSliceType> = () => ({
    categories: [],

})