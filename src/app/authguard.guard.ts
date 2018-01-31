import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log(localStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
  }
}
