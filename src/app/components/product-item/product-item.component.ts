import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  quantity: number = 0;

  constructor(private cart: CartService) {}

  addProductToCart() {
    if (this.quantity > 0 && this.product) {
      let newProduct = this.product;
      newProduct.quantity = +this.quantity;
      this.cart.addToCart(newProduct);
      alert('Product added to cart');
    } else {
      alert('Product not added to cart as quantity is 0');
    }
  }
}
