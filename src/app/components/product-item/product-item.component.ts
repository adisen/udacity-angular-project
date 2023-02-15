import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() eventEmitter = new EventEmitter();

  quantity: number = 0;

  constructor() {}

  addToCart() {
    if (this.quantity > 0 && this.product) {
      let newProduct = this.product;
      newProduct.quantity = +this.quantity;
      this.eventEmitter.emit(newProduct);
      alert('Product added to cart');
    } else {
      alert('Product not added to cart as quantity is 0');
    }
    this.eventEmitter.emit();
  }

  // addProductToCart() {
  //   if (this.quantity > 0 && this.product) {
  //     let newProduct = this.product;
  //     newProduct.quantity = +this.quantity;
  //     this.cart.addToCart(newProduct);
  //     alert('Product added to cart');
  //   } else {
  //     alert('Product not added to cart as quantity is 0');
  //   }
  // }
}
