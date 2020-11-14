import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeshopAboutComponent } from './coffeshop-about/coffeshop-about.component';
import { CoffeshopHomeComponent } from './coffeshop-home/coffeshop-home.component';
import { CoffeshopShopComponent } from './coffeshop-shop/coffeshop-shop.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "about",
    component: CoffeshopAboutComponent
  },
  {
    path: "home",
    component: CoffeshopHomeComponent
  },
  {
    path: "shop",
    component: CoffeshopShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
