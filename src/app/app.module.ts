import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {ProductComponent } from './product/product.component';
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
    FooterComponent



  ],
  imports: [
    BrowserModule,
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
    MainHeaderComponent,
    MatIcon,


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [



  ],
  schemas: []
})
export class AppModule {
}
