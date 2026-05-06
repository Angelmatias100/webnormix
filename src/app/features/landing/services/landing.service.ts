import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private router = inject(Router);
  private analyticsService = inject(AnalyticsService);

  navigateToAssistant(): void {
    this.analyticsService.trackEvent({ name: 'landing_navigate_assistant' });
    this.router.navigate(['/assistant']);
  }

  trackCategoryClick(categoryId: string): void {
    this.analyticsService.trackEvent({ name: 'landing_category_click', properties: { category_id: categoryId } });
  }

  trackDemoClick(): void {
    this.analyticsService.trackEvent({ name: 'landing_demo_click' });
  }
}
