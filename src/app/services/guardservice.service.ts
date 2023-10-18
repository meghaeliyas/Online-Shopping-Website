import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class GuardserviceService implements CanActivate{

  constructor(private authservice:AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   if(this.authservice.getSession()){
    return true;
   }else {
    this.router.navigate(['./Login']);
    return false;
   }
  }
}
