import { Injectable } from '@angular/core';
import { Product, UserDetail } from '../../utils/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private totalCost = 0;
  private userDatails: UserDetail = {
    fullName: '',
    address: '',
    creditCard: '',
  };

  constructor() {}

  addToCart(item: Product) {
    // Check if product already exists in cart
    const index = this.cartItems.findIndex((cartItem) => {
      return cartItem.id === item.id;
    });

    if (index !== -1) {
      this.cartItems[index].quantity! += item.quantity!;
      return;
    } else {
      this.cartItems.push(item);
      console.log(this.cartItems);
    }
  }

  removeFromCart(id: number) {
    this.cartItems = this.cartItems.filter((item) => {
      return item.id !== id;
    });
  }

  getCart() {
    return this.cartItems;
  }

  getTotalCost() {
    this.totalCost = 0;
    this.cartItems.forEach((item) => {
      if (item.quantity) {
        this.totalCost += item.price * item.quantity;
      }
    });
    return this.totalCost;
  }

  getUserDetails() {
    return this.userDatails;
  }

  clearCart() {
    this.cartItems = [];
  }
}
