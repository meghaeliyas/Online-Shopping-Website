import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProduct:any = FormGroup;

  constructor(private fb:FormBuilder,
              private pservice:ProductService) { }

  ngOnInit(): void {

    this.addProduct = this.fb.group({
      title : ['', Validators.required],
      price : ['',Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
      description : ['', Validators.required],
      rating : ['', Validators.required],
      category :['', Validators.required],
      stock :['',Validators.compose([Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
    })

  }
  get f(){
    return this.addProduct.controls;
  }

  add(){
   this.pservice.addProdcuts(this.addProduct.value).subscribe((res:any) =>{
     alert('success');
     this.addProduct.reset();

   },err =>{
      alert('someting went wrong')
   })
  }
}
