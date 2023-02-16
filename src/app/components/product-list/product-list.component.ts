import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any = [];

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((prod) => {
      this.products = prod;
      console.log(this.products);
    });
  }

  addProductToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  // removeProductFromCart(product: Product) {
  //   this.cartService.removeFromCart(product);
  //  }
}
