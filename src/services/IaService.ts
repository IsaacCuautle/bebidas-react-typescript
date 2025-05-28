import { streamText } from "ai";
import { OpenRouter } from "../lib/ai";

export default {
  async generateResponse(prompt: string) {
    const result = await streamText({
      model: OpenRouter("google/gemma-3n-e4b-it:free"),
      prompt,
    });

    return result.textStream;
  },
};
