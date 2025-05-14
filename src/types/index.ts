import z from "zod";

import {
  CategoriesAPIResponseShcema,
  DrinkAPIResponse,
  DrinkDetailsAPIResponses,
  DrinksAPIResponses,
  SearchFilterSchema,
} from "../schemas/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseShcema>;
export type SearchFilters = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponses>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type Recepie = z.infer<typeof DrinkDetailsAPIResponses>;
