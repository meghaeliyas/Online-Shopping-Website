import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  constructor(private _pservice:ProductService,
              private _cartservice:CartService, 
              private _router:Router, 
              private _aRoute:ActivatedRoute ) { }

  listProducts:any[] = [];
  productId:any;
  productDetail:any;
  
  ngOnInit(): void {
    this._pservice.getProducts().subscribe((res:any) =>{
    this.listProducts = res;
    this.productId = this._aRoute.snapshot.paramMap.get('id');
    this.productDetail = this.listProducts.find(x => x.id == this.productId);

    this.listProducts.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
    });
    // console.log(this.productDetail);
   })  
  }

  addtocart(item: any){
    this._cartservice.addToCart(item);

  }

}
