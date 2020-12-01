import { Component } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { last, takeLast } from 'rxjs/operators';
import { ShoppingCartService, CartItem, Totals } from './shopping-cart.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Shopping Cart';
  cartState$ = this.shoppingCartService.state$;
  constructor(private shoppingCartService: ShoppingCartService) { }

  addItemToCart(item: CartItem) {
    debugger
    this.shoppingCartService.addCartItem(item);
  }

  remove(item: CartItem): void {
    this.shoppingCartService.removeCartItem(item);
  }

}
