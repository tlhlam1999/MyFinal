import { Component, OnInit } from '@angular/core';
import { ProductdetailsComponent } from 'src/app/productdetails/productdetails.component';
import { AdminproductService } from './adminproduct.service';
import { Product } from './Product';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {

  products: Product[] = [];
  product: Product = {
    Barcode: '',
    Disabled: false,
    Discription: '',
    IDProduct: '',
    IDProductType: '',
    IDProvider: '',
    Image: [],
    Price: 0,
    ProductName: '',
    Rating: 0,
    Stock: 0,
    PriceIn: 0
  };

  constructor(public productService: AdminproductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProduct().subscribe((products) => {
      this.products = products;
    });
  }

  createProduct(): void {
    console.log(this.product);
    this.productService.createProduct(this.product).subscribe();
  }  
}
