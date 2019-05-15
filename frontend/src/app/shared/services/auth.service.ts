import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends MainService {

  constructor(http: HttpClient) { 
    super(http)
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(username: any, password: any, type: string): Promise<any> {
    return this.post('http://localhost:8000/api/auth/register/', {
      username: username,
      password: password,
      user_type: type
    })
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/api/auth/logout/', {})
  }
}
