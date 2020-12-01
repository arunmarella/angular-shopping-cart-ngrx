import { Component, Input } from '@angular/core';
import { ShoppingCartService, CartItem } from '../shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialog } from '../checkout/checkout-dialog.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() state: any;

  constructor(private shoppingCartService: ShoppingCartService, private dialog: MatDialog) { }

  checkout(): void {
    // this.shoppingCartService.checkout();
    let dialogRef = this.dialog.open(CheckoutDialog, {
      // data: { state: this.state }, // now uses the observable
      height: '400px',
      width: '600px',
    });
  }
}