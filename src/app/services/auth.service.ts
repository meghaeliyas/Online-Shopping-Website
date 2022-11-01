import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn : boolean = false;
  constructor() { }

  isLoggedIn(email:string,pswd:string){
    if(email === 'admin@gmail.com' && pswd === 'admin'){
     this.loggedIn = true;
     return true;
    
     
    }else {
      this.loggedIn = false;
      return  false;
    }
  }

  isAuthenticate(){
    return this.loggedIn;
  }
  
}
