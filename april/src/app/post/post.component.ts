import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postData = {message: ''};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  post() {
    this.api.sendPost(this.postData).subscribe(post => {
      console.log(post);
    });
  }

}
