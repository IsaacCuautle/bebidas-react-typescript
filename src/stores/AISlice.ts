import { StateCreator } from "zustand";
import IaService from "../services/IaService";

export type AISlice = {
  recepie: string;
  isGenerating: boolean;

  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
  recepie: "",
  isGenerating: false,

  generateRecipe: async (prompt) => {
    set(({recepie: "", isGenerating: true}));
    
    const data = await IaService.generateResponse(prompt);

    for await (const textPart of data) {
        
        set((state) => ({
            recepie: state.recepie + textPart,
        }))
    }

    set(({isGenerating: false}));
  },
});
