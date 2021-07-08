import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-two-columns',
  templateUrl: './layout-two-columns.component.html',
  styleUrls: ['./layout-two-columns.component.scss']
})
export class LayoutTwoColumnsComponent {
  @Input()
  hasSidebar = true;
}
