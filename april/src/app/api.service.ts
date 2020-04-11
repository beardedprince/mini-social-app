import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = environment.path;

  private TOKEN_KEY = 'token';
  constructor(private http: HttpClient, private router: Router) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

   logOut() {
     localStorage.removeItem(this.TOKEN_KEY);
     this.router.navigate(['/']);
  }

  getUsers() {
    return  this.http.get( this.path + '/users');
  }

  getProfile(id) {
    return  this.http.get( this.path + '/users/' + id);
  }

  registerUser(registerData) {
    return this.http.post(this.path + '/register', registerData );
  }

  loginUser(loginData) {
     this.http.post<any>(this.path + '/login', loginData).subscribe( result => {
       localStorage.setItem('token', result.token);
       console.log('token', result.token);
       this.router.navigate(['/']);
     });
  }

  sendPost(postData) {
    return this.http.post(this.path + '/post', postData, {responseType: 'text'});
  }

  getPost(userId) {
    return  this.http.get(this.path + '/post/' + userId);
  }
}
