import { Component, OnInit } from '@angular/core';
import { MainService } from '@core/services/main.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-custom-obs',
  standalone: false,
  templateUrl: './custom-obs.component.html',
  styleUrl: './custom-obs.component.less'
})
export class CustomObsComponent implements OnInit {
  customObsEx1:any;

  isDataStaus = "" // pending, completed, failed

  users:any = []
  finalUsers:any = []

  constructor(private service: MainService){}


  ngOnInit(): void {
    this.customObsEx1 = new Observable((observer: any) => {
      this.isDataStaus = "pending"

      let msg = "Data Emit 1"
        observer.next(msg)

      setTimeout(() => {
        let msg = "Data Emit 2"
        observer.next(msg)
      }, 3000)


      setTimeout(() => {
        let msg = "Data Emit 3"
        observer.next(msg)
      }, 5000)
    })

    this.getDataEmits()

    this.userDetails()
  }

  getDataEmits(){
    this.customObsEx1.subscribe((res: any) => {
      console.log(res)
    });
  }

  userDetails(){
    this.service.getUsers().subscribe(res => {
      console.log("USER DETAILS =>", res)
      this.users = res
      from(this.users).subscribe(res => {
        this.customObsEx1 = new  Observable((observer: any) => {
          if(res){
            observer.next(res)
            this.isDataStaus = 'completed'
          }else{
            this.isDataStaus = 'failed'
            observer.error(new Error('Something went wrong'))
          }
        })

        this.getCustomObsData()
      })
    })
  }

  getCustomObsData(){
    this.customObsEx1.subscribe((res:any) => {
      console.log("Custom Obs Data ===>", res)
      setTimeout(() => {
        this.finalUsers.push(res)
      }, 1000);
    })
  }

}
