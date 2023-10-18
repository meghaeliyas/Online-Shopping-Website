import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 
  logInForm:any = FormGroup;
  user:any;
  error:string ='';
  isLoggedIn:boolean = false;
  constructor( private fb:FormBuilder,
               private auth:AuthService, 
               private router:Router) { }

  ngOnInit(): void {
             this.logInForm = this.fb.group({
              email : ['',Validators.compose([Validators.required,Validators.email])],
             pswd : ['', Validators.required]
           });
  }

  get f(){return this.logInForm.controls;}

  logIn(){
     this.auth.isLoggedIn(this.logInForm.value).subscribe((res:any) =>{
      this.user = res.find((a:any) =>{
        return a.email === this.logInForm.value.email && a.pswd === this.logInForm.value.pswd;
      })
      if(this.user){
        this.logInForm.reset();
        this.router.navigate(['/Home']);
        sessionStorage.setItem('userId',this.user['id']);
      }else{
        this.isLoggedIn = false;
        this.error ='invalid username or password';
        this.logInForm.reset();
        this.router.navigate(['/Login']);
      }
     },err =>{
      this.error = 'something went wron';
     }) 
  }
 
  

}


