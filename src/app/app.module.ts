import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './services/api.service';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from './guards/login.guard';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartComponent } from './cart/cart.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { registerLocaleData } from '@angular/common';
import { PartnerComponent } from './partner/partner.component';
import { PartnerApplicationComponent } from './partner-application/partner-application.component';
import { LoaderService } from './services/loader.service';
import { PartnerGuard } from './guards/partner.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { CheckoutCompleteComponent } from './checkout-complete/checkout-complete.component';
import { CompleteGuard } from './guards/complete.guard';
import { JWTInterceptor } from './interceptors/jwt.interceptor';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { OwnerGuard } from './guards/owner.guard';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OwnerOrdersComponent } from './owner-orders/owner-orders.component';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';
import { ApplicationCompleteComponent } from './application-complete/application-complete.component';
import { ApplicationCompleteGuard } from './guards/application.complete.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
    CitiesComponent,
    CityComponent,
    RestaurantComponent,
    CartComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    PartnerComponent,
    PartnerApplicationComponent,
    CheckoutComponent,
    CheckoutCompleteComponent,
    OwnerDashboardComponent,
    SidebarComponent,
    OwnerOrdersComponent,
    ManageRestaurantComponent,
    ApplicationCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    AuthService,
    ApiService, 
    AuthGuard, 
    LoginGuard, 
    { provide: LOCALE_ID, useValue: "fr" },
    LoaderService,
    PartnerGuard,
    CheckoutGuard,
    CompleteGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    OwnerGuard,
    ApplicationCompleteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
