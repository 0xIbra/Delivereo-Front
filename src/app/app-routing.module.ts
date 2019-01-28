import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartComponent } from './cart/cart.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PartnerComponent } from './partner/partner.component';
import { PartnerApplicationComponent } from './partner-application/partner-application.component';
import { PartnerGuard } from './guards/partner.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';
import { CompleteGuard } from './guards/complete.guard';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerGuard } from './guards/owner.guard';
import { OwnerOrdersComponent } from './owner-orders/owner-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'search/city/:zip', component: CitiesComponent },
  { path: 'city/restaurants/:city', component: CityComponent },
  { path: 'restaurant/:id', component: RestaurantComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'partner', component: PartnerComponent  },
  { path: 'partner/application', component: PartnerApplicationComponent, canActivate: [AuthGuard, PartnerGuard] },
  { path: 'cart/checkout', component: CheckoutComponent, canActivate: [AuthGuard, CheckoutGuard] },
  { path: 'cart/checkout/complete', component: CheckoutCompleteComponent, canActivate: [AuthGuard, CompleteGuard] },
  { path: 'owner/dashboard', component: OwnerDashboardComponent, canActivate: [AuthGuard, OwnerGuard] },
  { path: 'owner/orders', component: OwnerOrdersComponent, canActivate: [AuthGuard, OwnerGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
