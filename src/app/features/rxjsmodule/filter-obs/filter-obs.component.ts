import { Component, OnInit } from '@angular/core';
import { Posts } from '@core/models/post.model';
import { MainService } from '@core/services/main.service';

@Component({
  selector: 'app-filter-obs',
  standalone: false,
  templateUrl: './filter-obs.component.html',
  styleUrl: './filter-obs.component.less'
})
export class FilterObsComponent implements OnInit {

  blogs: Posts[] = []
  counter: number = 0


  constructor(private service: MainService){}


  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.service.getPostByFilter('https://jsonplaceholder.org/posts', 1).subscribe(res => {
      console.log("FILTER RESPONSE ===>", res);
      this.blogs = res
    })
  }


}
