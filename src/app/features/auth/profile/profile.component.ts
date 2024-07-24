import { Component, OnInit } from '@angular/core';
import { MainService } from '@core/services/main.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent implements OnInit{


  constructor(private service: MainService){}

  ngOnInit(): void {
    this.getDynamicProfileFields()
    
  }

  getDynamicProfileFields(){
    this.service.getProfileFormFields().subscribe(res => {
      console.log(res)
    })
  }


}
