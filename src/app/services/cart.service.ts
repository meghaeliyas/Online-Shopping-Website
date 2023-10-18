import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cartItemlist:any = [];
  // productlist = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  getCart(){
    return this.http.get<any>('http://localhost:3000/cart');
  }
  addtoChckOutlist(item:any){
    return this.http.post<any>(`http://localhost:3000/checkout`,item);
  }
  addToCart(items:any){
    return this.http.post<any>('http://localhost:3000/cart',items);
  }
  removeItem(id:number){
    return this.http.delete<any>('http://localhost:3000/cart/'+id);
  }
}
