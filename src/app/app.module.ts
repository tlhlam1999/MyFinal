import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from '../app/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsComponent} from '../app/products/products.component';
import {ProductdetailsComponent} from '../app/productdetails/productdetails.component';
import {AboutComponent} from '../app/about/about.component';
import {BlogsComponent} from '../app/blogs/blogs.component';
import {BlogdetailsComponent} from '../app/blogdetails/blogdetails.component';
import {CartComponent} from '../app/cart/cart.component';
import {CheckoutComponent} from '../app/checkout/checkout.component';
import {MessengersComponent} from '../app/messengers/messengers.component';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';
import {LoginComponent} from '../app/login/login.component';
import {RegisterComponent} from '../app/register/register.component';
import {AdminproductsComponent} from '../app/adminproducts/adminproducts.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminproductComponent } from './adminproducts/adminproduct/adminproduct.component';
import { AdminproducttypesComponent } from './adminproducttypes/adminproducttypes.component';
import { AdminTopicBlogsComponent } from './admintopicblog/admintopicblog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailsComponent,
    AboutComponent,
    BlogsComponent,
    BlogdetailsComponent,
    CartComponent,
    CheckoutComponent,
    MessengersComponent,
    LoginComponent,
    RegisterComponent,
    AdminproductsComponent,
    AdminproductComponent,
    AdminproducttypesComponent,
    AdminDashboardComponent,
    AdminTopicBlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
