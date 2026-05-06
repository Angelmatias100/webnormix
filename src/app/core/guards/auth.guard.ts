import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Check localStorage for auth token to determine if authenticated
    const token = localStorage.getItem('authToken');

    if (token) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}

export const authGuard: CanActivateFn = () => {
  const guardService = inject(AuthGuardService);
  return guardService.canActivate();
};
