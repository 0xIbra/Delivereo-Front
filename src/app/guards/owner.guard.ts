import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class OwnerGuard implements CanActivate {

    constructor(private auth: AuthService) {}

    canActivate() {
        if (this.auth.isOwner())
            return true;
        else
            return false;
    }
}