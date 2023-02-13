import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Product[]>('../../assets/data.json');
  }

  // getDataById(id: number) {
  //   return this.http.get<Product[]>('../../assets/data.json');
  // }
}
