import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleProjectComponent } from './pages/projects/single-project/single-project.component';
import { ProjectListComponent } from './pages/projects/project-list.component';
import { AboutComponent } from './pages/about/about.component';
import {Theme} from './core/theme.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects/:pageTitle',
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      {
        path: ':id',
        component: SingleProjectComponent,
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      theme: Theme.Dark
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
