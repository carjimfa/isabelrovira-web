import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule
    ]
})
export class SharedModule { }
