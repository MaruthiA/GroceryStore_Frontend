import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Userlogin } from '../models/userlogin.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  loginClicked(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    const login = { email: email, password: password };

    // alert(password);

    this.http
      .post(localStorage.getItem('url') + '/api/signin', login)
      .pipe(
        map(response => {
          return response;
        })
      )
      .subscribe(responseData => {
        // console.log(responseData);

        if (responseData['user'].name) {
          this.handleAuthentication(
            responseData['user'].email,
            responseData['user']._id,
            responseData['user'].name
          );
          // console.log(responseData['user'].email === 'admin@Admin.com');
          if (responseData['user'].email === 'admin@Admin.com') {
            // console.log('ADmin');
            this.router.navigateByUrl('/adminmain').then(result => {});
          } else {
            this.router.navigateByUrl('/main').then(result => {});
          }
        }
      });
    form.reset();
  }

  private handleAuthentication(email: string, userId: string, name: string) {
    const user = new Userlogin(email, userId, name);
    this.user.next(user);

    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_name', name);
    localStorage.setItem('user_id', userId);

    sessionStorage.setItem('user_name', name);
  }
}
