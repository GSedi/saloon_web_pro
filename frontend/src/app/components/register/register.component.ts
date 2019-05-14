import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

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
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.username !== '' && this.password !== '' && this.type != '') {
      this.auth.register(this.username, this.password, this.type);
    }
  }

}
