import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''

  constructor(
    private provider: ProviderService
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.username != '' && this.password != '') {
      this.provider.login(this.username, this.password).then(res => {
        console.log(res)
        localStorage.setItem('token', res.key);
        if (res.partner_id)
          localStorage.setItem('partner_id', res.partner_id);
      })
    }
  }
}
