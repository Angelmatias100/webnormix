import { Injectable, signal } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  isLoading = signal<boolean>(false);
  private requestCount = 0;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requestCount++;
    this.isLoading.set(true);

    return next.handle(req).pipe(
      finalize(() => {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.isLoading.set(false);
        }
      })
    );
  }
}
