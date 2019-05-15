import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchName = ''

  constructor(
    private auth: AuthService,
    private location: Location,
    private router: Router,
    private provider: ProviderService
  ) { }

  ngOnInit() {
  }

  isPartner() {
    if (localStorage.partner_id)
      return true
    else return false
  }

  logout() {
    this.auth.logout().then(res => {
      localStorage.clear();
      this.router.navigate(['/login'])
    })
  }

  isLogged() {
    return !!localStorage.token
  }

  filter(){
    this.provider.sendMessage.emit(this.searchName);
  }
}
