import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.scss']
})
export class ShowproductsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  productsData: any = [];
  dataSource: MatTableDataSource<Product>;
  products: Product[];
  displayedColumns: string[] = [
    'Sr No',
    'Image',
    'Name',
    'Price',
    'Category',
    'Stock'
  ];
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
        this.dataSource = new MatTableDataSource<Product>(this.productsData);
      });
  }
}
