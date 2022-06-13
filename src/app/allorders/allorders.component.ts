import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ordersshared/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Orders } from '../ordersshared/orders';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  orderData: any = [];
  dataSource: MatTableDataSource<Orders>;

  displayedColumns: string[] = [
    'Orderid',
    'customer Name',
    'Quantity',
    'amount',
    'DateTime',
    'status',
    'Address',
    'Customer Email',
    'Action'
  ];

  constructor(private orderApi: ApiService) {
    this.orderApi.getallOrders().subscribe(data => {
      // console.log(data);
      this.orderData = data;
      this.dataSource = new MatTableDataSource<Orders>(this.orderData);
    });
  }

  ngOnInit(): void {}
}
