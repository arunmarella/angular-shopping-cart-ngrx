import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutDialog } from './checkout/checkout-dialog.component';
import { ShoppingCartService } from './shopping-cart.service';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, CartComponent, CheckoutDialog ],
  bootstrap:    [ AppComponent ],
  providers: [ShoppingCartService],
  entryComponents: [CheckoutDialog]
})
export class AppModule { }
