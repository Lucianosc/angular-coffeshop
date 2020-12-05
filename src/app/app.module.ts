import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeTableComponent } from './coffe-table/coffe-table.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { CoffeshopShopComponent } from './coffeshop-shop/coffeshop-shop.component';
import { CoffeshopHomeComponent } from './coffeshop-home/coffeshop-home.component';
import { CoffeshopAboutComponent } from './coffeshop-about/coffeshop-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeTableComponent,
    ShoppingCartComponent,
    CoffeshopShopComponent,
    CoffeshopHomeComponent,
    CoffeshopAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
