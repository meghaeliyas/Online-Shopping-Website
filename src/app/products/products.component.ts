import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts:any [] =[];

  value = 2.5; 
  starList: string[] = [];

  constructor(private _pService:ProductService,
              private _aRoute:ActivatedRoute, 
              private router:Router) { }

  ngOnInit(): void {
        
      // get all products
      this.getAll();
      

    // rating
    let i=1;
    for(i=1; i<=5; i++) {
      if(i<= this.value) {
        this.starList.push("fas fa-star");
      } else if(i <= this.value+0.5) {
        this.starList.push("fas fa-star-half");
      } else {
        this.starList.push("far fa-star");
      }
    }  
  }

// get all products
    getAll(){
        this._pService.getProducts().subscribe((res:any) =>{
        this.listProducts = res;
        this.searchFilter();
       
       
      });
    }

  //  search filter

    searchFilter(){
        this._aRoute.params.subscribe(params =>{
            if(params.searchItem){
              this.listProducts = this.listProducts.filter(product => 
              product.title.toLowerCase().includes(params.searchItem));
              // console.log(this.listProducts);
            }
            if(params.category){ // category filter
              this.listProducts = this.listProducts.filter(product => 
                product.category.toLowerCase().includes(params.category));
              //  console.log(this.listProducts);
            }else {
              this.listProducts;
            }
        });
    }


    
    

}
