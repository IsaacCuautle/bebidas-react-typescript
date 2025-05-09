import { z } from "zod";


export const CategoriesAPIResponseShcema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});
