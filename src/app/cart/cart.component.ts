import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartProduct : any = [];
grandTotal : number = 0;
totalCartItem :number = 0;

  constructor(private _cartservice:CartService) { }

  ngOnInit(): void {
this._cartservice.getProduct().subscribe((res =>{
  this.cartProduct = res;
  this.totalCartItem = res.length;
  this.grandTotal = this._cartservice.getTotalPrice();
  console.log(this.grandTotal);
}))

  }
removeItem(item :any){
  this._cartservice.removeCartItem(item);
}
}
