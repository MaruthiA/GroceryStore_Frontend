import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { CartServices } from '../services/cart.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  products: any;
  similarproducts: Product[];
  @ViewChild('ingre_qty') ingre_qty: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private cartServi: CartServices
  ) {}

  ngOnInit() {
    const id2 = this.route.snapshot.paramMap.get('id');

    this.http
      .get(localStorage.getItem('url') + '/api/product/' + id2)
      .subscribe(posts => {
        // console.log("array"+posts);

        this.products = posts;
      });

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
        const products1 = [];
        for (let i = 0; i < posts.length; i++) {
          if (this.products.category.name === posts[i].category.name) {
            products1.push({ ...posts[i], id: i });
          }
        }
        this.similarproducts = products1;

        // console.log(this.similarproducts);
      });
  }

  addTocart() {
    // console.log(this.products._id);
    // cart: Cart;
    const qty = this.ingre_qty.nativeElement.value;

    const id = this.products._id;
    const product_name = this.products.name;
    const product_count = qty;
    const product_image = this.products.productImagePath;
    const product_price = this.products.price;
    const product_total = qty * product_price;

    // console.log(this.products.name);
    // console.log(qty);
    const cartItems = new Cart(
      this.products._id,
      product_name,
      product_count,
      product_image,
      product_price,
      product_total
    );

    // console.log(cartItems);
    this.cartServi.addCart(cartItems);
    this.router.navigateByUrl('/mycart');
  }
}
