import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class PagesModule { }
