import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept( req, next ) {
    const api = this.injector.get(ApiService);
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'token  ' + api.token)
    });
    return next.handle(authRequest);
  }
}
