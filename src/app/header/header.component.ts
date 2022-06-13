import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../services/product.service';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { Userlogin } from '../models/userlogin.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  currentRoute: boolean;
  username: string;
  constructor(
    private productServi: ProductServices,
    private http: HttpClient,
    private router: Router
  ) {
    // console.log(router.url);
    if (router.url === '/main') {
      this.currentRoute = true;
    } else {
      this.currentRoute = false;
    }
  }

  session_set = false;

  category: Category[];
  ngOnInit(): void {
    if (sessionStorage.getItem('user_name') != null) {
      this.username = sessionStorage.getItem('user_name');
      this.session_set = true;
    } else {
      this.session_set = false;
    }

    this.http
      .get<{ [key: string]: Product }>(
        localStorage.getItem('url') + '/api/categories'
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
      .subscribe(category => {
        // console.log(category);
        this.category = category;
        for (const i of this.category) {
          // console.log(i.name);
        }
        // this.products = posts;
      });
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);

    localStorage.removeItem('userData');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');

    sessionStorage.removeItem('user_name');
    this.session_set = false;
  }
}
