import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RegisterComponent} from "./register/register.component";
import {ProductComponent} from "./add-products/product.component";
import {CategoryComponent} from "./category/category.component";
import {UsersComponent} from "./users/users.component";
import {AdminProfileComponent} from "./users/admin-profile/admin-profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {CartComponent} from "./cart/cart.component";
import {ProductPageComponent} from "./all-product-page/product-page.component";
import {ViewProductPageComponent} from "./view-product-page/view-product-page.component";

export const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: 'products', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'user-management', component: UsersComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'all-products', component: ProductPageComponent },
  { path: 'view-add-products', component: ViewProductPageComponent },
  { path: 'product/:id', component: ViewProductPageComponent },



  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
