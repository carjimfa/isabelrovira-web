import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {PostRequestParams} from '../../core/wordpress-api/post-request-params';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private readonly dialogRef: MatDialogRef<MenuComponent>,
    private readonly router: Router
  ) {}

  closeMenu(): void {
    this.dialogRef.close();
  }

  goToEditorial(): void {
    const params = new PostRequestParams({
      categories: ['2']
    });

    this.router.navigate(['projects'], {
      queryParams: params,
      queryParamsHandling: 'merge'
    });

    this.closeMenu();
  }
}
