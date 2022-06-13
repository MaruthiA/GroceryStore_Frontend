import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServices } from '../services/product.service';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {  map } from 'rxjs/operators';

@Component({
  selector: 'app-allproductlist',
  templateUrl: './allproductlist.component.html',
  styleUrls: ['./allproductlist.component.scss']
})
export class AllproductslistComponent implements OnInit {
  productsData: any = [];
  dataSource: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  products: Product[];
  displayedColumns: string[] = [
    'Image',
    'Name',
    'description',
    'Availability',
    'price',
    'x'
  ];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private productServi: ProductServices,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get<{ [key: string]: Product }>(
        localStorage.getItem('url') + '/api/product'
      )
      .pipe(
        map(responseData => {
          const postArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }

          return postArray;
        })
      )
      .subscribe(posts => {

        this.products = posts;
        this.productsData = posts;
        console.log(this.productsData);
        this.dataSource = new MatTableDataSource<Product>(this.productsData);

        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 0);
      });
  }
}
