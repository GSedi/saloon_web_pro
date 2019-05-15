import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderService } from './shared/services/provider.service';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './AuthInterceptor';
import { PartnerSaloonsComponent } from './components/partner-saloons/partner-saloons.component';
import { LoginComponent } from './components/login/login.component';
import { SaloonComponent } from './components/saloon/saloon.component';
import { SaloonsListComponent } from './components/saloons-list/saloons-list.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SaloonDetailComponent } from './components/saloon-detail/saloon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PartnerSaloonsComponent,
    LoginComponent,
    SaloonsListComponent,
    SaloonComponent,
    ServiceDetailComponent,
    RegisterComponent,
    NavbarComponent,
    SaloonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
