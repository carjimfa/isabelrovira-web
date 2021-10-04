import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { ProjectCoverComponent } from './project-cover/project-cover.component';
import { TextFadeInBottomComponent } from './text-fade-in-bottom/text-fade-in-bottom.component';
import { LayoutOneColumnComponent } from './layout-one-column/layout-one-column.component';
import { LayoutTwoColumnsComponent } from './layout-two-columns/layout-two-columns.component';
import { NavigationLabelPipe } from './navigation/navigation-label.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        ToolbarComponent,
        NavigationComponent,
        ProjectCoverComponent,
        TextFadeInBottomComponent,
        LayoutOneColumnComponent,
        LayoutTwoColumnsComponent,
        NavigationLabelPipe
    ],
    exports: [
        ToolbarComponent,
        NavigationComponent,
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
      MatListModule,
      BrowserAnimationsModule
    ]
})
export class SharedModule { }
