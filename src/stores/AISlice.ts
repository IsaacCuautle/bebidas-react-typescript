import { StateCreator } from "zustand";
import IaService from "../services/IaService";

export type AISlice = {
  recepie: string;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
  recepie: "",

  generateRecipe: async (prompt) => {
    const data = await IaService.generateResponse(prompt);
  },
});
