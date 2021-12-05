import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const isLogged = this.authenticationService.isLoggedIn();

        if (isLogged) {
          const token = localStorage.getItem("token");

            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${token}`
                }
            });
        }

        return next.handle(request);
    }
}