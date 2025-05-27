import { StateCreator } from "zustand";

export type AISlice = {
    recepie: string;
    generateRecipe: (prompt: string) => Promise<void>;
}

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
    recepie: "",

    generateRecipe: async (prompt) => {
        console.log(" from generateRecipe", prompt);
    }
});