import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
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
              private _aRoute:ActivatedRoute,
              private _auth:AuthService ) { }

  listProducts:any[] = [];
  productId:any;
  productDetail:any;
  userid:any;
  quantity:any;
  
  
  
  ngOnInit(): void {
    this._pservice.getProducts().subscribe((res:any) =>{
    this.listProducts = res;
    this.productId = this._aRoute.snapshot.paramMap.get('id');
    this.productDetail = this.listProducts.find(x => x.id == this.productId);
   })  
  }

  addtocart(value: any){
  this.userid = this._auth.getSession();
  
  this.productDetail.userid = this.userid;
   this.productDetail.price = this.productDetail['price']*value['quantity'];
  // console.log(this.productDetail);
  Object.assign(this.productDetail,value);
  
  // console.log(this.productDetail);
  this._cartservice.addToCart(this.productDetail).subscribe((res)=>{
    alert('product added to cart');
  },err=>{
    alert('something went wrong');
  })

  }

}
