import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';
import { CartServices } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { NewOrderServices } from '../services/neworder.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(
    private cartSer: CartServices,
    private http: HttpClient,
    private newOrde: NewOrderServices,
    private router: Router
  ) {}

  cart: Cart[];
  order: Order[];

  final_total: number = 0;
  ngOnInit(): void {
    this.cart = this.cartSer.getcart();

    for (const i of this.cart) {
      this.final_total = this.final_total + i.product_total;
    }
  }
  deleteCart(index: number) {
    this.cartSer.deleteCart(index);
    this.cart = this.cartSer.getcart();
    this.final_total = 0;
    for (const i of this.cart) {
      this.final_total = this.final_total + i.product_total;
    }
  }

  placeOrder2() {
    if (this.cart.length === 0) {
      alert('Cart is Empty');
      return;
    }

    for (const i of this.cart) {
      const items = new Order(
        i.product_id,
        i.product_name,
        i.product_count,
        i.product_price
      );
      this.newOrde.addToOrder(items);
    }

    let products2: Order[];

    products2 = this.newOrde.getOrder();
    const amount = this.final_total;
    const user = localStorage.getItem('user_id');
    if (user == null) {
      alert('Please Login');
      this.router.navigateByUrl('/login');
      return;
    }
    const postData = {
      products: products2,
      amount: amount,
      user: user
    };

    this.http
      .post(localStorage.getItem('url') + '/api/order/create', postData)
      .subscribe(responseData => {
        // console.log(responseData);
        alert('Order is created !!!!');
      });
  }
}
