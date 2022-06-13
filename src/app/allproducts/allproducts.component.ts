import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../services/product.service';
import { Product } from '../models/product.model';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  products: Product[];

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

          // console.log(postArray);
          return postArray;
        })
      )
      .subscribe(posts => {
        //   console.log("array"+posts);

        this.products = posts;
      });
  }
}
