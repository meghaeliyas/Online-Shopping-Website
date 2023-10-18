import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartProduct } from 'src/models/cartproducts';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
 
  getProducts(){
    return this.http.get<any>('http://localhost:3000/products');
  }

  addProdcuts(items:CartProduct){
    return this.http.post<any>('http://localhost:3000/products',items);
  }

}
