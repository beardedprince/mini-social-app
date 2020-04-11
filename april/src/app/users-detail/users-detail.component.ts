import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {

  profile: any;
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.api.getProfile(id).subscribe( profile => {
      this.profile = profile;
    });
  }

}
