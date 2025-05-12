
import z from "zod";

import { CategoriesAPIResponseShcema, SearchFilterSchema } from "../schemas/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseShcema>;
export type SearchFilters = z.infer<typeof SearchFilterSchema>;