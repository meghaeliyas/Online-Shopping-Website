import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

   signUpForm:any = FormGroup;

  constructor( private fb:FormBuilder) {}
  
  ngOnInit(): void {
    

    this.signUpForm = this.fb.group({
     
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['',Validators.compose([Validators.required,Validators.email])],
      phone : ['',Validators.compose([Validators.required,Validators.pattern('[- +()0-9]{10,12}')])],
      pswd : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
   });
    
  }

  signUp(data:any){
    console.log(this.signUpForm.value);
  }
  get firstName():FormControl{
    return this.signUpForm.get('firstName') as FormControl;
  }
  get lastName():FormControl{
    return this.signUpForm.get('lastName') as FormControl;
  }
  get email():FormControl{
    return this.signUpForm.get('email') as FormControl;
  }
  get phone():FormControl{
    return this.signUpForm.get('phone') as FormControl;
  }
  get pswd():FormControl{
    return this.signUpForm.get('pswd') as FormControl;
  }
}
