import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsmoduleRoutingModule } from './rxjsmodule-routing.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    MainpageComponent,
    CustomObsComponent
  ],
  imports: [
    SharedModule,
    RxjsmoduleRoutingModule,
  ],
})
export class RxjsmoduleModule { }
