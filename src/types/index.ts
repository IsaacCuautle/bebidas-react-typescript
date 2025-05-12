import z from "zod";

import {
  CategoriesAPIResponseShcema,
  DrinksAPIResponses,
  SearchFilterSchema,
} from "../schemas/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseShcema>;
export type SearchFilters = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponses>;
