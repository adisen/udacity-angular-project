import { Component, OnChanges, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total = 0;
  card = '';
  name = '';
  address = '';
  disabled =
    this.card.length < 3 && this.name.length < 3 && this.address.length < 3;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotalCost();
    console.log(this.disabled);
  }

  updateQuantity(id: number, quantity: number | undefined) {
    console.log(`ID: ${id} Quantity: ${quantity}`);
    this.cartService.updateCartQuantity(id, quantity);
    this.total = this.cartService.getTotalCost();
  }
}
