import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent implements OnInit {
  fullName: string = '';
  amount: number = 0;

  constructor(private cart: CartService, private router: Router) {}

  ngOnInit() {
    this.fullName = this.cart.getUserDetails().fullName;
    this.amount = this.cart.getTotalCost();
  }

  goBackHome() {
    this.cart.clearCart();
    this.router.navigate(['/']);
  }
}
