import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CheckoutGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/']);
            M.toast({ html: 'Connectez-vous pour accéder à cette page.' });
            return false;
        } else if (this.auth.isLoggedIn() && this.auth.cart === undefined) {
            this.router.navigate(['/cart']);
            M.toast({ html: 'Vous n\'avez rien dans votre panier.' });
            return false;
        } else if (this.auth.isLoggedIn() && this.auth.cart !== undefined) {
            return true;
        }
    }

}