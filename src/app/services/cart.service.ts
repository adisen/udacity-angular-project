import { Injectable } from '@angular/core';
import { Product } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  constructor() {}

  addToCart(item: Product) {
    this.cartItems.push(item);
    console.log(this.cartItems);
  }
}
