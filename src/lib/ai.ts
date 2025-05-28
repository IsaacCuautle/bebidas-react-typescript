import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export const OpenRouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
});
