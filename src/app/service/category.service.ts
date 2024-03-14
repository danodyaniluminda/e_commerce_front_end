import { Injectable } from '@angular/core';
import {Category} from "../category/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];

  addCategory(category: Category) {
    this.categories.push(category);
  }
}
