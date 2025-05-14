import { z } from "zod";

// This schema is used to validate the response from the API when fetching categories
export const CategoriesAPIResponseShcema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

// This schema is used to validate the search filters
export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

// This schema is used to validate the response from the API when fetching drinks
export const DrinkAPIResponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksAPIResponses = z.object({
  drinks: z.array(DrinkAPIResponse),
});

// This schema is used to validate the response from the API when fetching drink details
export const DrinkDetailsAPIResponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});

export const DrinkDetailsAPIResponses = z.object({
  drinks: z.array(DrinkDetailsAPIResponse),
});
