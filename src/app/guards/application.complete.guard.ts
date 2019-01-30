import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ApplicationCompleteGuard implements CanActivate {

    constructor(private auth: AuthService) {}

    canActivate() {
        if (this.auth.user !== undefined && !this.auth.user.$restaurant.enabled) {
            return true;
        } else {
            M.toast({ html: 'Vous n\'avez pas les droits pour acceder a cette page.' });
            return false;
        }
    }

}