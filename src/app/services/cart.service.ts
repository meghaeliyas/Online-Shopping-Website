import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemlist:any = [];
  productlist = new BehaviorSubject<any>([]);

  constructor() { }

  getProduct(){
    return this.productlist.asObservable();
  }

  setProduct(product : any){
    this.cartItemlist.push(...product);
    this.productlist.next(product);
  }

  addToCart(product: any){
    this.cartItemlist.push(product);
    this.productlist.next(this.cartItemlist);
    this.getTotalPrice();
    console.log(this.cartItemlist);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemlist.map((a:any)=>{
      grandTotal += a.total;
    }) 
    return grandTotal; 
  }

  removeCartItem(product : any){
    this.cartItemlist.map((a:any, index:any) =>{
      if(product.id === a.id){
        this.cartItemlist.splice(index,1);
      }
    })
  }

  removeAllCart(){
    this.cartItemlist = [];
    this.productlist.next(this.cartItemlist);
  }
}
