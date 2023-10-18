import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    totalCartItem : number = 0;
    searchItem : string = '';
    userid :any;
    cartProduct:any;
    // isLoggedIn:any;
  constructor(private _cartservice:CartService,
              private _aRoute:ActivatedRoute, 
              private _router:Router ,
              private auth:AuthService) { }

  ngOnInit(): void {
    // cart count
    this.userid = this.auth.getSession();
    this._cartservice.getCart().subscribe((res) =>{
     this.cartProduct = res.filter((a:any) =>{
      return a.userid == this.userid ;
     })
    this.totalCartItem = this.cartProduct.length;
    // this._aRoute.params.subscribe((params) =>{
    //   if(params.searchItem) this.searchItem = params.searchItem; 
    // });

    // this.isLoggedIn = this.auth.isAuthenticate();
     })
  }
 
  search(value:string){
    this._router.navigate(['/search/'+ value]);
   }
  

   filterCategory(value:string){
    this._router.navigate(['/Result/'+ value]);
   }
  
   signOut(){
    alert('clicked')
   sessionStorage.clear();
    this.userid = null;
    this._router.navigate(['/Home']);

   }
}
