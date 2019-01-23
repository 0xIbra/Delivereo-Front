import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate() {
        if (this.auth.isLoggedIn()) {
            M.toast({ html: 'Vous êtes déjà connectée' });
            this.router.navigate(['/profile']);
            return false;
        }else {
            return true;
        }
    }

}