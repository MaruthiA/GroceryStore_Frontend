import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ProductServices } from '../services/product.service';
// import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: User;
  constructor(
    private productServi: ProductServices,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onCreatePost(postData: {
    name: string;
    email: string;
    password: string;
    address: string;
  }) {
    this.http
      .post(localStorage.getItem('url') + '/api/signup', postData)
      .subscribe(responseData => {
        // console.log(responseData);

        alert('welcome account is created');
        this.router.navigateByUrl('/login');
      });
  }
}
