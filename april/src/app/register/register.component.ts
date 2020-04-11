import { Component, OnInit } from '@angular/core';


import {ApiService} from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerData = {name: '', email: '', password: '', description: ''};
  constructor( private api: ApiService, private router: Router) {
   }

  ngOnInit(): void {}

  RegisterUser() {
    this.api.registerUser(this.registerData).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/login']);

    });
    console.log(this.registerData);
  }

}
