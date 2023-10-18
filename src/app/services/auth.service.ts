import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logIn : boolean =false;
 
  constructor(private http:HttpClient) { }
  

  userCheck(){
    return this.http.get<any>('http://localhost:3000/userdata')
  }
  registerUser(data:any){
    return this.http.post<any>('http://localhost:3000/userdata',data);
  }

  isLoggedIn(cred:any){
    return this.http.get<any>('http://localhost:3000/userdata',cred);
  }

  
  getSession(){
    return sessionStorage.getItem('userId');       
  }
  
}
