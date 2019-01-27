import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    private auth: AuthService;
    constructor(private injector: Injector) {
        this.auth = injector.get(AuthService);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes('auth')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });
            return next.handle(request);
        } else {
            return next.handle(request);
        }
    }



}