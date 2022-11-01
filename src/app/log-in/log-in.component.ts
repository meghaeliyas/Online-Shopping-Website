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
  
  constructor( private fb:FormBuilder,
               private auth:AuthService, 
               private router:Router) { }

  ngOnInit(): void {
             this.logInForm = this.fb.group({
              email : ['',Validators.compose([Validators.required,Validators.email])],
             pswd : ['', Validators.required]
           });
  }

  logIn(data:any){
      let res = this.auth.isLoggedIn(data.email,data.pswd);
        if(res === true){
          this.router.navigate(['./Home']);
        }else{
          console.log('invalid'); 
        }
  }
  

}


