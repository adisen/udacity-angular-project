import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product | undefined;
  id: number | null = 0;
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.forEach((param) => {
      this.id = Number(param.get('id'));

      this.dataService.getData().subscribe((data) => {
        if (this.id) this.product = data[this.id - 1];
      });
    });
  }

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
