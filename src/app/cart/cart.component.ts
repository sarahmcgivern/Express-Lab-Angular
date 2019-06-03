import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../services/cart.service';

interface cartItems {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

interface ApiData {
   cartItems: cartItems[];
}

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  title = 'Express-Lab';
  list: cartItems[];


  constructor(private api: Api, private router: Router) {}

  getAllItems = () => {
  this.api.getItems().subscribe((data: ApiData) => {
    console.log(data);
    this.list = data.cartItems;
  });
};


}
