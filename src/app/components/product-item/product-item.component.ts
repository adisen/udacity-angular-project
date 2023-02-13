import { Component, Input } from '@angular/core';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  quantity: number = 0;

  addProductToCart() {
    if (this.quantity > 0) {
      console.log(this.product, +this.quantity);
    }
  }
}
