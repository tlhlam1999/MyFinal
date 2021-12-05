import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductTypes } from './ProductTypes';

@Injectable({
  providedIn: 'root'
})
export class AdminproducttypesService {

  API_URL: string = 'https://localhost:44313';

  constructor(public http: HttpClient) { }

  getProduct() {
    return this.http.get<ProductTypes[]>(this.API_URL + "/api/ProductTypes");
  }

  createProduct(producttype: ProductTypes) {
    return this.http.post<ProductTypes[]>(this.API_URL + "/api/ProductTypes", producttype);
  }
}
