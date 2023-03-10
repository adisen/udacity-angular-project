import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-success', component: OrderSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
