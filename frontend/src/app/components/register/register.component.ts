import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username: any = "";
  public password: any = "";
  type: string = 'client'

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = ''
    this.password = ''
  }

  register() {
    if (this.username !== '' && this.password !== '' && this.type != '') {
      this.auth.register(this.username, this.password, this.type).then(res => {
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
