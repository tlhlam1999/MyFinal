import { Component, OnInit } from '@angular/core';
import { ProductdetailsComponent } from 'src/app/productdetails/productdetails.component';
import { AdminproducttypesService } from './adminproducttypes.service';
import { ProductTypes } from './ProductTypes';


@Component({
  selector: 'app-adminproducttypes',
  templateUrl: './adminproducttypes.component.html',
  styleUrls: ['./adminproducttypes.component.css']
})
export class AdminproducttypesComponent implements OnInit {

  producttypes: ProductTypes[] = [];
  producttype: ProductTypes = {
    Disabled: false,
    Discription: '',
    NameProductType: '',
  };

  constructor(public producttypeService: AdminproducttypesService) { }

  ngOnInit(): void {
    this.getProductTypes();
  }

  getProductTypes(): void {
    this.producttypeService.getProduct().subscribe((producttypes) => {
      this.producttypes = producttypes;
    });
  }

  createProductTypes(): void {
    console.log(this.producttype);
    this.producttypeService.createProduct(this.producttype).subscribe();
  }  
  /* onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }

      // Saved Image into varible
      this.Image = event.target.files[0];
    }
  } */
}
