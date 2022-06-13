import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {
  orderData: any = [];
  dataSource: MatTableDataSource<Order>;

  displayedColumns: string[] = [
    'Sr No',
    'Orderid',
    'Quantity',
    'Total Amount',
    'DateTime',
    'Status',
  ];
  constructor(private http: HttpClient, private router: Router) {}
  orders: Order[];
  user_id: any;
  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id');
    if (this.user_id == null) {
      alert('Please Login');
      this.router.navigateByUrl('/login');
      return;
    } else {
      this.http
        .get<{ [key: string]: Order }>(
          localStorage.getItem('url') + '/api/orders'
        )
        .pipe(
          map(responseData => {
            const postArray = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key) ){
                postArray.push({ ...responseData[key], id: key });
              }
            }
            return postArray;
          })
        )
        .subscribe(posts => {
          this.orders = posts;
          this.orderData = this.orders;
          this.dataSource = new MatTableDataSource<Order>(this.orderData);
        });
    }
  }
}
