import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginData = {
  email: '',
  password: ''
};


  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }


  LoginUser() {
    this.api.loginUser(this.loginData);
      // this.router.navigate(['/users']);
  }
}
