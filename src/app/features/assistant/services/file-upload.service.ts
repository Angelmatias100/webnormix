import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

export interface UploadResponse {
  success: boolean;
  fileId: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiService = inject(ApiService);

  private readonly MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
  private readonly ALLOWED_TYPES = ['application/pdf', 'image/png', 'image/jpeg', 'application/xml'];
  private readonly ALLOWED_EXTENSIONS = ['.pdf', '.png', '.jpg', '.jpeg', '.xml'];

  constructor() {}

  uploadFile(file: File): Observable<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.apiService.post<UploadResponse>('/api/assistant/upload', formData);
  }

  validateFile(file: File): ValidationResult {
    // Check file size
    if (file.size > this.MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File size exceeds 50MB limit. Current size: ${(file.size / 1024 / 1024).toFixed(2)}MB`
      };
    }

    // Check file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      return {
        valid: false,
        error: `File type not allowed. Allowed types: PDF, PNG, JPEG, XML`
      };
    }

    // Check file extension
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!this.ALLOWED_EXTENSIONS.includes(extension)) {
      return {
        valid: false,
        error: `File extension not allowed. Allowed extensions: .pdf, .png, .jpg, .jpeg, .xml`
      };
    }

    return { valid: true };
  }
}
