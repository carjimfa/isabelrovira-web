import { Component } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    readonly menuService: NavigationService,
    readonly location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
