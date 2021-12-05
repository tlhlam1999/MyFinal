import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = "https://localhost:44313";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post<any>(this.API_URL + '/api/auth/login', { username, password })
      .pipe(tap(res => this.setSession(res)));
  }

  register(user: User) {
    return this.http.post<any>(this.API_URL + '/api/auth/register', { ...user })
      .pipe(tap(res => this.setSession(res)));
  }

  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);

    console.log(authResult);
  }

  logout() {
    localStorage.removeItem("token");
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    if (token === "")
      return false;
    return true;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
