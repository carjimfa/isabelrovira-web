import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-one-column',
  templateUrl: './layout-one-column.component.html',
  styleUrls: ['./layout-one-column.component.scss']
})
export class LayoutOneColumnComponent {
  @Input()
  hasSidebar = true
}
