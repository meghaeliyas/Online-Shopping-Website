import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

cartProduct:any;
totalPrice : number = 0;
totalCartItem :number = 0;
userid:any;
productId:number = 0;
itemId:number = 0;

  
  


  constructor(private _cartservice:CartService,
              private auth:AuthService) { }

  ngOnInit(): void {
    this.userid = this.auth.getSession();
this._cartservice.getCart().subscribe((res) =>{
 this.cartProduct = res.filter((a:any) =>{
  return a.userid == this.userid ;
 })
this.totalCartItem = this.cartProduct.length;
this.totalPrice  =  this.cartProduct.reduce((total:any,a:any)=>{
  return total+(parseInt(a.price));
},0) ;

});



  }

 
removeItem(item :any){
 this.productId = item.id;
 console.log(this.productId);
 this._cartservice.removeItem(this.productId).subscribe((res) =>{
  alert('item Removed');
 },err =>{
  alert ('somethimg went wrong');
 })
}




checkOut(){
  
  console.log(this.cartProduct)
  this._cartservice.addtoChckOutlist(this.cartProduct).subscribe((res) =>{
  
    alert('item booked');
    this.emptyCart();
    // this.updateStok();
  },err =>
  {
    alert('something went wrong');
  })
}

emptyCart(){
 let itemIdsArray = this.cartProduct.map((item:any) => item.id)
 itemIdsArray.forEach((id:any) => this._cartservice.removeItem(id).subscribe((res) =>{
  
 },err =>{
  alert('something went wrong');
 }))
}


updateStok(){
   this.cartProduct.map((item:any)=>{
    return this.cartProduct.stock = item.stock - item.quantity;
  });
  console.log(this.cartProduct);
}
}

