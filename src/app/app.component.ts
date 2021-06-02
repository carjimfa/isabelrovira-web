import {Component, OnInit} from '@angular/core';
import {WordpressApiService} from './core/wordpress-api/wordpress-api.service';
import {MenuService} from './shared/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isabelrovira-web';

  constructor() {}
}
