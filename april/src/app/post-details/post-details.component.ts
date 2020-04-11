import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  postList: object;
  postdetails: any;
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.id;
    
    this.api.getPost(userId).subscribe(posts => {
      this.postdetails = posts;
    });
  }

}
