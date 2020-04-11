import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: object;
  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe(result => {
      this.usersList = result;
      console.log('hello', this.usersList);
    }, err => console.log(err));
  }

}
