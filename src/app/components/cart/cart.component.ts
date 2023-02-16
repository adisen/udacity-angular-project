import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product, UserDetail } from 'src/utils/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  quantity = 0;
  total = 0;
  userDetails: UserDetail = {
    fullName: '',
    address: '',
    creditCard: '',
  };

  disabled =
    this.userDetails.address.length < 1 &&
    this.userDetails.creditCard.length < 1 &&
    this.userDetails.fullName.length < 1;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotalCost();
    this.userDetails = this.cartService.getUserDetails();
    // console.log(this.disabled);
  }

  updateQuantity(id: number, quantity: number | undefined) {
    if (quantity === 0) {
      alert('Produc removed from cart');
      this.cartService.removeFromCart(id);
      this.cart = this.cartService.getCart();
    }
    this.total = this.cartService.getTotalCost();
  }

  updateDisabled() {
    this.disabled =
      this.userDetails.address.length < 6 ||
      this.userDetails.creditCard.length < 16 ||
      this.userDetails.fullName.length < 3;
  }

  submitOrder() {
    if (isNaN(+this.userDetails.creditCard)) {
      alert('Invalid credit card number');
    } else {
      this.router.navigate(['/order-success']);
    }
  }
}
