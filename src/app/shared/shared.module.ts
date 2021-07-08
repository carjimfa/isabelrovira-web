import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { ProjectCoverComponent } from './project-cover/project-cover.component';
import { TextFadeInBottomComponent } from './text-fade-in-bottom/text-fade-in-bottom.component';
import { LayoutOneColumnComponent } from './layout-one-column/layout-one-column.component';
import { LayoutTwoColumnsComponent } from './layout-two-columns/layout-two-columns.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    MenuComponent,
    ProjectCoverComponent,
    TextFadeInBottomComponent,
    LayoutOneColumnComponent,
    LayoutTwoColumnsComponent
  ],
    exports: [
        ToolbarComponent,
        MenuComponent,
        ProjectCoverComponent,
        TextFadeInBottomComponent,
        LayoutOneColumnComponent,
        LayoutTwoColumnsComponent
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
