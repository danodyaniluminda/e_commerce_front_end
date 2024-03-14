import {Subcategory} from "./sub-category.mode";

export interface Category {
  categoryName: string;
  subcategories: Subcategory[];
}
