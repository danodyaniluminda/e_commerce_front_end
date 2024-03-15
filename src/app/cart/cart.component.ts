import {Component, OnInit} from '@angular/core';
import {CartModelServer} from "./cart.model";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: number;

  constructor(public cartService: CartService) {
  }
  ngOnInit() {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  ChangeQuantity(id: number, increaseQuantity: Boolean) {
    this.cartService.UpdateCartData(id, increaseQuantity);
  }

}
