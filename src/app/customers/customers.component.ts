import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customerData: any = [];
  dataSource: MatTableDataSource<User>;

  displayedColumns: string[] = [
    'Sr No',
    'customer id',
    'Name',
    'Email',
    'Address',
  ];
  constructor(private http: HttpClient, private router: Router) {}
  users: User[];
  ngOnInit(): void {
    const user = localStorage.getItem('user_id');
    if (user == null) {
      alert('Please Login');
      this.router.navigateByUrl('/login');
      return;
    } else {
      this.http
        .get<{ [key: string]: User }>(
          localStorage.getItem('url') + '/api/users'
        )
        .pipe(
          map(responseData => {
            const postArray = [];
            for (const key in responseData) {
              // console.log(key);
              // console.log(responseData[key]);
              if (
                responseData.hasOwnProperty(key) &&
                responseData[key].name !== 'Admin'
              ) {
                postArray.push({ ...responseData[key], id: key });
              }
            }

            return postArray;
          })
        )
        .subscribe(users => {
          this.users = users;
          this.customerData = this.users;
          this.dataSource = new MatTableDataSource<User>(this.customerData);
        });
    }
  }
}
