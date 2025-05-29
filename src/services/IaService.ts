import { streamText } from "ai";
import { OpenRouter } from "../lib/ai";

export default {
  async generateResponse(prompt: string) {
    const result = await streamText({
      model: OpenRouter("deepseek/deepseek-prover-v2:free"),
      system: `Eres un asistente de bartender. Tu tarea es generar recetas de cocina basadas en los ingredientes y el tipo de platillo que se te proporcionen. Responde en español y de forma breve.`,
      prompt
    });

    return result.textStream;
  },
};
