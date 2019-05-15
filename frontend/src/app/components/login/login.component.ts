import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = ''
  public password = ''

  constructor(
    private provider: ProviderService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.username, this.password)
    this.username = ''
    this.password = ''
  }

  login() {
    if (this.username != '' && this.password != '') {
      this.provider.login(this.username, this.password).then(res => {
        localStorage.setItem('token', res.key);
        if (res.partner_id) {
          localStorage.setItem('partner_id', res.partner_id);
          this.router.navigate(['/partner-saloons'])
        } else {
          this.router.navigate(['/saloons'])
        }
      })
    }
  }

  isLogged() {
    return !!localStorage.token
  }
}
