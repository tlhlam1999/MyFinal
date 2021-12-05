import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ProductsComponent } from '../app/products/products.component';
import { ProductdetailsComponent } from '../app/productdetails/productdetails.component';
import { AboutComponent } from '../app/about/about.component';
import { BlogsComponent } from '../app/blogs/blogs.component';
import { BlogdetailsComponent } from '../app/blogdetails/blogdetails.component';
import { CartComponent } from '../app/cart/cart.component';
import { CheckoutComponent } from '../app/checkout/checkout.component';
import { MessengersComponent } from '../app/messengers/messengers.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { AdminproductsComponent } from '../app/adminproducts/adminproducts.component';
import { AdminproductComponent } from './adminproducts/adminproduct/adminproduct.component';
import { AdminproducttypesComponent } from './adminproducttypes/adminproducttypes.component';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';
import { AdminTopicBlogsComponent } from './admintopicblog/admintopicblog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogdetails', component: BlogdetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'messengers', component: MessengersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminproducts', component: AdminproductsComponent },
  { path: 'adminproduct', component: AdminproductComponent },
  { path: 'adminproducttypes', component: AdminproducttypesComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'admintopicblogs', component: AdminTopicBlogsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
