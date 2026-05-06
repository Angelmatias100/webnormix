import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export interface AnalyticsEvent {
  name: string;
  properties?: { [key: string]: any };
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private apiService: ApiService) {}

  trackEvent(event: AnalyticsEvent): void {
    this.apiService.post('/analytics/events', event).subscribe({
      error: (error) => {
        console.warn('Failed to track event:', error);
      }
    });
  }

  trackPageView(pageName: string, properties?: { [key: string]: any }): void {
    const event: AnalyticsEvent = {
      name: `page_view_${pageName}`,
      properties
    };
    this.trackEvent(event);
  }
}
