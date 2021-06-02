import {Component, OnInit} from '@angular/core';
import {WordpressApiService} from './core/wordpress-api/wordpress-api.service';
import {MenuService} from './shared/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'isabelrovira-web';

  constructor(private readonly menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems();
  }
}
