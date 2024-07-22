import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Posts } from '@core/models/post.model';
import { MainService } from '@core/services/main.service';

@Component({
  selector: 'app-map-obs',
  standalone: false,
  templateUrl: './map-obs.component.html',
  styleUrl: './map-obs.component.less'
})
export class MapObsComponent implements OnInit {

  posts: Posts[] = []


  constructor(private  service: MainService){}

  ngOnInit(): void {
    this.getPostData()
  }


  getPostData(){
    this.service.getPosts('https://jsonplaceholder.org/posts').subscribe(res => {
      console.log("MAP RESPONSE ===>", res)
      this.posts = res
    })
  }

}
