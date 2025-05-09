
import z from "zod";

import { CategoriesAPIResponseShcema } from "../schemas/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseShcema>;