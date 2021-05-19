import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleProjectComponent } from './pages/projects/single-project/single-project.component';
import { ProjectListComponent } from './pages/projects/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectListComponent
      },
      {
        path: ':id',
        component: SingleProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
