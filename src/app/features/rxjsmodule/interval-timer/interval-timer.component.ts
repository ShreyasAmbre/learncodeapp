import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainService } from '@core/services/main.service';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  standalone: true,
  imports: [],
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.less'
})
export class IntervalTimerComponent implements OnInit, OnDestroy {

  broadCast = interval(3000)
  videoSubscribtion: Subscription | undefined;

  OTPTimer = timer(5000, 1000)
  timeout: Subscription | undefined;



  constructor(private service: MainService){}

  ngOnInit(): void {
    this.videoSubscribtion = this.broadCast.subscribe(res => {

      if(res >= 5){
        this.videoSubscribtion?.unsubscribe()
      }else{
        this.service.addElement(res + 1, 'elContainer')
      }
    })


    this.timeout = this.OTPTimer.subscribe(res => {
      if(res >= 5){
        this.timeout?.unsubscribe()
      }else{
        this.service.addElement(res + 1, 'elContainer2')
      }
    })

  }

  ngOnDestroy(): void {
    this.videoSubscribtion?.unsubscribe()
    this.timeout?.unsubscribe()
  }
 
}
