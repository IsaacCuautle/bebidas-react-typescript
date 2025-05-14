import axios from "axios";

import {
  CategoriesAPIResponseShcema,
  DrinkDetailsAPIResponse,
  DrinkDetailsAPIResponses,
  DrinksAPIResponses,
} from "../schemas/recipies-schema";
import { Drink, SearchFilters } from "../types";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const { data } = await axios.get(url);
  const result = CategoriesAPIResponseShcema.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

export async function getRecipies(filters: SearchFilters) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios.get(url);

  const result = DrinksAPIResponses.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

// TODO: implement the getSelectedRecipie function
export async function getRecipieByID(id: Drink["idDrink"]) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = await axios.get(url);
  const result = DrinkDetailsAPIResponses.safeParse(data);

  if (result.success) {
    return result.data;
  }
}
