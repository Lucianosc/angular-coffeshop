import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CoffeCartService } from '../coffe-cart.service';
import { Coffe } from '../coffe-table/Coffe';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  title = "Shopping Cart";

  cartList$: Observable<Coffe[]>; 

  constructor(private cart: CoffeCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }
  
  deleteFromCart(coffe){
    this.cart.deleteFromCart(coffe);
  }
}
