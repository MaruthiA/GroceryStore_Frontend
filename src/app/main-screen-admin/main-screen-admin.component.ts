import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-main-screen-admin',
  templateUrl: './main-screen-admin.component.html',
  styleUrls: ['./main-screen-admin.component.scss']
})
export class MainScreenAdminComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  users: User[];
  ngOnInit(): void {
    const user = localStorage.getItem('user_id');
    if (user == null) {
      alert('Please Login');
      this.router.navigateByUrl('/login');
      return;
    }
  }
}
