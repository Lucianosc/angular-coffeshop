import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffe-table',
  templateUrl: './coffe-table.component.html',
  styleUrls: ['./coffe-table.component.scss']
})
export class CoffeTableComponent implements OnInit {

  title = "Coffe table";
  coffe = {
    img:"./assets/imgs/peetsCoffeBrasil.jfif",
    name:"Brasil medium roast",
    intensity:"Medium",
    price: 140,
    stock: 700
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
