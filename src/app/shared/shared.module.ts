import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule,
    NzButtonModule
  ]
})
export class SharedModule { }
