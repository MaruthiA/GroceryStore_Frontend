import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user_id');
    if (user == null) {
      alert('Please Login');
      this.router.navigateByUrl('/login');
      return;
    }
  }

  addCategoryClicked(form: NgForm) {
    const category = form.value.category;
    const categorydata = { name: category };

    this.http
      .post(localStorage.getItem('url') + '/api/category/create', categorydata)
      .pipe(
        map(response => {
          return response;
        })
      )
      .subscribe(responseData => {
        // console.log(responseData);
        if (responseData) {
          alert('Category Added');
        }
      });
    form.reset();
  }
}
