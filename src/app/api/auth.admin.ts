import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmin implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try{
      const decoded = jwt_decode(localStorage.getItem('access_token'));
      if (decoded.exp < Date.now() / 1000){
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        localStorage.removeItem('id');
        localStorage.removeItem('role');
        this.router.navigate(['login']);
        return false;
      }
    }
    catch{
  
    }
    if (localStorage.getItem('role')==="admin") {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

}