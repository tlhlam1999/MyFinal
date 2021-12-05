import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class AdminproductService {

  API_URL: string = 'https://localhost:44313';

  constructor(public http: HttpClient) { }

  getProduct() {
    return this.http.get<Product[]>(this.API_URL + "/api/products");
  }

  createProduct(product: Product) {
    return this.http.post(this.API_URL + "/api/products", { ...product });
  }
}
