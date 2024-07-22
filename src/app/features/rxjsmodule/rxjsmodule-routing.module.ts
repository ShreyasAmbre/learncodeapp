import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { OfFromObsComponent } from './of-from-obs/of-from-obs.component';
import { ToarrayComponent } from './toarray/toarray.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { MapObsComponent } from './map-obs/map-obs.component';

const routes: Routes = [
  { path: "mainpage", component: MainpageComponent },
  { path: "fromevent", component: FromeventComponent },
  { path: "intervaltimer", component: IntervalTimerComponent },
  { path: "of-from-obs", component: OfFromObsComponent },
  { path: "toarray", component: ToarrayComponent },
  { path: "custom-obs", component: CustomObsComponent },
  { path: "map-obs", component: MapObsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsmoduleRoutingModule { }
