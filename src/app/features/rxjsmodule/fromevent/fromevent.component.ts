import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MainService } from '@core/services/main.service';
import { count, fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  standalone: true,
  imports: [],
  templateUrl: './fromevent.component.html',
  styleUrl: './fromevent.component.less'
})
export class FromeventComponent implements AfterViewInit  {
  @ViewChild('addBtn') addBtn: ElementRef | undefined

  constructor(private service: MainService){}

  ngAfterViewInit(): void {
    
    let counter = 1
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe(res => {
      console.log("Btn Clicked =>", this.addBtn?.nativeElement)
      this.service.addElement(counter, 'elContainer')
      counter++
    })
  }


}
