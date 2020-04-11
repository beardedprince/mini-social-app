import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
loggedIn;
loggedOut;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.api.isAuthenticated;
    console.log(this.loggedIn);
  }

  logOut() {
    const out = this.api.logOut();
    this.loggedOut = out;
    console.log(out);
  }

}
