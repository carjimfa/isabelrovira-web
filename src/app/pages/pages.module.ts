import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SingleProjectComponent } from './single-project/single-project.component';



@NgModule({
  declarations: [HomeComponent, SingleProjectComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class PagesModule { }
