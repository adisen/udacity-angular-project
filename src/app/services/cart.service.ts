import { Injectable } from '@angular/core';
import { Product } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItem: Product[] = [];
  constructor() {}
}
