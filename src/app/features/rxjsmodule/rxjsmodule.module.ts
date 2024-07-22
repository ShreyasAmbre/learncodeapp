import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsmoduleRoutingModule } from './rxjsmodule-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { SharedModule } from '@shared/shared.module';
import { MapObsComponent } from './map-obs/map-obs.component';
import { FilterObsComponent } from './filter-obs/filter-obs.component';

@NgModule({
  declarations: [
    MainpageComponent,
    CustomObsComponent,
    MapObsComponent,
    FilterObsComponent
  ],
  imports: [
    SharedModule,
    RxjsmoduleRoutingModule,
  ],
})
export class RxjsmoduleModule { }
