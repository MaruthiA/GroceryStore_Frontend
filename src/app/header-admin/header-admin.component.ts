import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Userlogin } from '../models/userlogin.model';
@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  user = new BehaviorSubject<Userlogin>(null);

  username: string;

  session_set = false;

  ngOnInit(): void {
    if (sessionStorage.getItem('user_name') != null) {
      this.username = sessionStorage.getItem('user_name');
      this.session_set = true;
    } else {
      this.session_set = false;
    }
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
