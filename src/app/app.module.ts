import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {ProductComponent } from './add-products/product.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {FooterComponent} from "./footer/footer.component";
import {RegisterComponent} from "./register/register.component";
import {JsonPipe, NgIf} from "@angular/common";
import {CurrencyPipe} from "@angular/common";
import {AppRoutingModule} from "./app.routes"
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {GoogleMapsModule} from "@angular/google-maps";
import {UsersComponent} from "./users/users.component";
import {SidenavComponent} from "./layout/sidenav/sidenav.component";
import {AdminHeaderComponent} from "./header/admin-header/admin-header.component";
import {MainHeaderComponent} from "./header/main-header/main-header.component";
import {MatIcon} from "@angular/material/icon";
import {CartComponent} from "./cart/cart.component";
import {ToastrModule} from "ngx-toastr";
import {ProductPageComponent} from "./all-product-page/product-page.component";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ViewProductPageComponent} from "./view-product-page/view-product-page.component";
import {MatSlideToggle, MatSlideToggleModule} from "@angular/material/slide-toggle";



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    ProductComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent,
    AppComponent,
    UsersComponent,
    FooterComponent,
    CartComponent,
    MainHeaderComponent,
    ProductPageComponent,
    ViewProductPageComponent



  ],
    imports: [
        BrowserModule,
        BsDropdownModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        JsonPipe,
        NgIf,
        CurrencyPipe,
        AppRoutingModule,
        HttpClientModule,
        GoogleMapsModule,
        SidenavComponent,
        AdminHeaderComponent,
        MatIcon,
        MatSlideToggleModule,
        ToastrModule.forRoot({
            timeOut: 3000, // Toast display duration (in milliseconds)
            positionClass: 'toast-top-right', // Toast position
            preventDuplicates: true, // Prevent duplicate toasts
            closeButton: true // Show close button on toasts
        }),
        MatSlideToggle


    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [



  ],
  schemas: []
})
export class AppModule {
}
