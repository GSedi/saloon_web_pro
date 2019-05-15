import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaloonsListComponent } from './components/saloons-list/saloons-list.component';
import { SaloonComponent } from './components/saloon/saloon.component';
import { PartnerSaloonsComponent } from './components/partner-saloons/partner-saloons.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SaloonDetailComponent } from './components/saloon-detail/saloon-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'saloons', component: SaloonsListComponent },
  { path: 'saloons/:id', component: SaloonComponent },
  { path: 'services/:id', component: ServiceDetailComponent },
  { path: 'partner-saloons', component: PartnerSaloonsComponent },
  { path: 'saloons-detail/:id', component: SaloonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
