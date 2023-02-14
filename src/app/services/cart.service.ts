import { Injectable } from '@angular/core';
import { Product } from '../../utils/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [
    {
      description: 'You can read it!',
      id: 1,
      name: 'Book',
      price: 9.99,
      quantity: 3,
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];
  private totalCost = 0;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor() {}

  addToCart(item: Product) {
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

  getCart() {
    return this.cartItems;
  }

  getTotalCost() {
    this.cartItems.forEach((item) => {
      if (item.quantity) {
        this.totalCost += item.price * item.quantity;
      }
    });
    return this.totalCost;
  }

  updateCartQuantity(id: number, quantity: number | undefined) {
    this.cartItems.forEach((item) => {
      if (item.id === id) {
        // update total cost
        if (item.quantity) {
          this.totalCost = this.totalCost - item.price * item.quantity;
        }

        console.log(this.totalCost, item.quantity, quantity);

        item.quantity = quantity;
        if (quantity) this.totalCost += item.price * quantity;
        console.log(this.totalCost);
      }
    });
  }
}
