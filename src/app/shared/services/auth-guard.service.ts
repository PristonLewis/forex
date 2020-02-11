import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('userid') === '' || localStorage.getItem('userid') === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
