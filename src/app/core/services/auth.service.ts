import { Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id: string;
  email: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal<boolean>(false);
  user = signal<User | null>(null);

  constructor(private apiService: ApiService) {
    this.checkAuthStatus();
  }

  login(email: string, password: string): Observable<{ token: string; user: User }> {
    return this.apiService.post<{ token: string; user: User }>('/auth/login', { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('authToken', response.token);
        this.isAuthenticated.set(true);
        this.user.set(response.user);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isAuthenticated.set(false);
    this.user.set(null);
  }

  private checkAuthStatus(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticated.set(true);
      this.apiService.get<{ user: User }>('/auth/me').pipe(
        tap((response) => {
          this.user.set(response.user);
        })
      ).subscribe({
        error: () => {
          this.logout();
        }
      });
    }
  }
}
