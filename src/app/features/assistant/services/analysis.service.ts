import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalysisResult } from '../models/analysis.model';
import { ApiService } from '../../../core/services/api.service';

export interface RegulatoryArea {
  id: string;
  name: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  private apiService = inject(ApiService);

  constructor() {}

  analyzeCase(prompt: string): Observable<AnalysisResult> {
    return this.apiService.post<AnalysisResult>('/api/assistant/analyze', { prompt });
  }

  getCategories(): Observable<RegulatoryArea[]> {
    return this.apiService.get<RegulatoryArea[]>('/api/assistant/categories');
  }
}
