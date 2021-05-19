import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { ProjectCoverComponent } from './project-cover/project-cover.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent,
    ProjectCoverComponent
  ],
    exports: [
        ToolbarComponent,
        MenuComponent,
        ProjectCoverComponent
    ],
    imports: [
      CommonModule,
      MatToolbarModule,
      RouterModule,
      MatDialogModule,
      MatListModule
    ]
})
export class SharedModule { }
