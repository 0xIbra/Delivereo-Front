import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      M.toast({ html: 'Les mots de passe ne sont pas identiques.' });
    } else {
      this.auth.changePassword({ currentPassword: this.currentPassword, newPassword: this.newPassword })
      .subscribe(
        data => {
          let res: any = data;
          M.toast({ html: res.data.message });
          this.router.navigate(['/profile']);
        },
        err => {
          if (err.error.data.message !== undefined) {
            M.toast({ html: err.error.data.message });
          } else {
            console.log(err);
          }
        }
      );
    }
  }

}
