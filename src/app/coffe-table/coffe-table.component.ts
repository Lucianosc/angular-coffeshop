import { Component, OnInit } from '@angular/core';
import { Coffe } from './coffe';

@Component({
  selector: 'app-coffe-table',
  templateUrl: './coffe-table.component.html',
  styleUrls: ['./coffe-table.component.scss']
})
export class CoffeTableComponent implements OnInit {

  title = "Coffe table";

  coffes: Coffe[] = [
    {
      
      name: "Brasil medium roast",
      intensity: "Medium",
      price: 140,
      stock: 80,
      img: "./assets/imgs/peetsCoffeBrasil.jfif",
      offer: false,
      quantity: 0
    },
    {
      name: "Etiopian",
      intensity: "Fuerte",
      price: 180,
      stock: 5,
      img: "./assets/imgs/peetsCoffeBrasil.jfif",
      offer: false,
      quantity: 0
    },
    {
      
      name: "Colombian supreme",
      intensity: "Suave",
      price: 120,
      stock: 10,
      img: "./assets/imgs/peetsCoffeBrasil.jfif",
      offer: true,
      quantity: 0
    },
    {
      
      name: "NessCafe",
      intensity: "Suave",
      price: 80,
      stock: 0,
      img: "./assets/imgs/peetsCoffeBrasil.jfif",
      offer: false,
      quantity: 0
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(coffe : Coffe){
    if(coffe.stock > coffe.quantity){
      coffe.quantity++;
    }
  }

  downQuantity(coffe : Coffe){
    if(coffe.quantity > 0){
      coffe.quantity--;
    }
  }

  onChangeQuantity(event, coffe : Coffe): void{
    if(coffe.quantity > coffe.stock){
      coffe.quantity = coffe.stock;
    }
  }
}
