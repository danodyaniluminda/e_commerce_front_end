import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Category} from "./category.model";
import {CategoryService} from "../service/category.service";
import {NgForOf} from "@angular/common";
import {AdminHeaderComponent} from "../header/admin-header/admin-header.component";
import {SidenavComponent} from "../layout/sidenav/sidenav.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    AdminHeaderComponent,
    SidenavComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  newCategory: Category = { categoryName: '', subcategories: [{ subcategoryName: '' }] };

  constructor(private categoryService: CategoryService, private router: Router) { }

  addSubcategory() {
    this.newCategory.subcategories.push({ subcategoryName: '' });
  }

  removeSubcategory(index: number) {
    this.newCategory.subcategories.splice(index, 1);
  }

  onSubmit() {
    this.categoryService.addCategory(this.newCategory);
    this.newCategory = { categoryName: '', subcategories: [{ subcategoryName: '' }] };
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']); // Replace '/dashboard' with the actual path to your dashboard component
  }

}
