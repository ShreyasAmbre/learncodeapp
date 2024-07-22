import { Component, OnInit } from '@angular/core';
import { MainService } from '@core/services/main.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from-obs',
  standalone: true,
  imports: [],
  templateUrl: './of-from-obs.component.html',
  styleUrl: './of-from-obs.component.less'
})
export class OfFromObsComponent implements OnInit{
  counter:number = 1
  carCollection = ["BMW", "Audi", "Range Rover", "Mercedes"] 


  constructor(private service: MainService){}

  ngOnInit(): void {
    this.getOfSeq("Shreyas", "Shrikat", "Ambre")
    this.getCollectionSeq()
  }

  getOfSeq(n1:string, n2:string, n3:string){
     of(n1, n2, n3).subscribe(name => {
      this.service.addElement(this.counter, 'elContainer', name)
      this.counter++
     }) 
  }

  getCollectionSeq(){
    from(this.carCollection).subscribe(car => {
      this.service.addElement(this.counter, 'elContainer2', car)
      this.counter++
    })
  }

}
