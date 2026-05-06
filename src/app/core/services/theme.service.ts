import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<Theme>('light');

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    const newTheme: Theme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    this.saveTheme(newTheme);
    this.applyTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.saveTheme(theme);
    this.applyTheme(theme);
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme || 'light';
    this.theme.set(savedTheme);
    this.applyTheme(savedTheme);
  }

  private saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
  }

  private applyTheme(theme: Theme): void {
    const htmlElement = document.documentElement;
    if (theme === 'dark') {
      htmlElement.classList.add('dark-theme');
    } else {
      htmlElement.classList.remove('dark-theme');
    }
  }
}
