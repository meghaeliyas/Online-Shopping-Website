import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts:any;

  constructor(private _pService:ProductService) { }

  ngOnInit(): void {

    this._pService.getProducts().subscribe((res:any) =>{
      
      
      this.listProducts = res;
      console.log(this.listProducts);
      
    })
  }

}
