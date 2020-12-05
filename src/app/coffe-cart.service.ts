import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Coffe} from './coffe-table/Coffe';

@Injectable({
  providedIn: 'root'
})
export class CoffeCartService {

  private _cartList: Coffe[] = [];
  cartList: BehaviorSubject<Coffe[]> = new BehaviorSubject(this._cartList);
  
  constructor() { }

  addToCart(coffe: Coffe) {

    let item: Coffe = this._cartList.find((item1) => item1.name == coffe.name);

    if (!item && coffe.quantity > 0){
      this._cartList.push({ ... coffe});
    }
    else {
      item.quantity += coffe.quantity;
    }

    this.cartList.next(this._cartList);
  }

  deleteFromCart(coffe: Coffe){
    let i = 0;
    this._cartList.forEach(item => {
      if(item.name == coffe.name){
        return;
      }
      i++;
    });
    this._cartList.splice(i, 1);
    
    this.cartList.next(this._cartList);
  }
}
