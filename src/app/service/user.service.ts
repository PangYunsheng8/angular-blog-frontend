import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getSession() {
    return this.http.get(`http://localhost:3000/api/session`, {withCredentials: true});
  }

  postSignIn(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    }
    return this.http.post(`http://localhost:3000/api/session`, user, httpOptions);
  }

  deleteSignOut() {
    return this.http.delete(`http://localhost:3000/api/session`, {withCredentials: true});
  }
}
