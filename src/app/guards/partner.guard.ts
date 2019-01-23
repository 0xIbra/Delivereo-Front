import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class PartnerGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate() {
        if (this.auth.isLoggedIn() && (this.auth.user.$restaurant === undefined || this.auth.user.$restaurant === null)) {
            return true;
        } else if (!this.auth.isLoggedIn()) {
            M.toast({ html: 'Connectez-vous pour accéder à cete page' });            
            this.router.navigate(['/']);
            return false;
        } else if (this.auth.user.$restaurant !== null || this.auth.user.$restaurant !== undefined) {
            M.toast({ html: "Vous pouvez ouvrir qu'un seul restaurant." });
            this.router.navigate(['/profile']);
            return false;
        }
    }

}