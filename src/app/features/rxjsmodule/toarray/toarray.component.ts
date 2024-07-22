import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  standalone: true,
  imports: [],
  templateUrl: './toarray.component.html',
  styleUrl: './toarray.component.less'
})
export class ToarrayComponent implements OnInit, OnDestroy {
  duration = interval(1000)
  intervalSubscribtion: Subscription | undefined;
  counts:number[] = []

  constructor(){}

  ngOnInit(): void {
    this.intervalSubscribtion = this.duration.pipe(
      take(3),
      toArray()
    ).subscribe(res => {

      console.log("toArray() operator===>", res);
      this.counts = res
    })
  }


  ngOnDestroy(): void {
    this.intervalSubscribtion?.unsubscribe
  }
  

}
