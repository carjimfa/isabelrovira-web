import { Component, OnInit } from '@angular/core';
import { WordpressApiService } from '../../shared/wordpress-api/wordpress-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly wordpressApiService: WordpressApiService) { }

  ngOnInit(): void {
    this.wordpressApiService.getMain();
  }

}
