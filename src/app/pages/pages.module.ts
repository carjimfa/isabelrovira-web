import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SingleProjectComponent } from './projects/single-project/single-project.component';
import { ProjectListComponent } from './projects/project-list.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SingleProjectComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
