import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

   signUpForm:any = FormGroup;
    emailcheck:any;
    emailAlredyExist:string = '';
    

  constructor( private fb:FormBuilder, 
               private auth:AuthService,
               private router:Router) {}
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
     
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['',Validators.compose([Validators.required,Validators.email])],
      phone : ['',Validators.compose([Validators.required,Validators.pattern('[- +()0-9]{10,12}')])],
      pswd : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
   });
    
  }
 get f(){return this.signUpForm.controls;}

  signUp(){
    this.auth.userCheck().subscribe(res => {
      this.emailcheck = res.find((a:any) =>{
        return a.email === this.signUpForm.value.email;
      })
      if (this.emailcheck) {
        this.emailAlredyExist = "Email Alredy Exist";  
      }
      else{
        this.auth.registerUser(this.signUpForm.value).subscribe((res) =>{
          alert('success');
          this.signUpForm.reset();
          // this.router.navigate(['/Login']);
        },err=>{
          alert("Something went wrong")})
      }
    });

    
    }
 
}
