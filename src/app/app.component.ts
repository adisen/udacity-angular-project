import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

export interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'udacity-angular-project';
  products: any = [];

  constructor(private _apiService: HttpService) {}

  ngOnInit() {
    this._apiService.getData().subscribe((res) => {
      // console.log(res.);
      this.products = res;
    });
  }
}
