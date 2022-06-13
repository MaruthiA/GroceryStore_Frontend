import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string = 'https://grocerystore--api.herokuapp.com/api/manageorder';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // getting all orders

  getallOrders() {
    return this.http.get(`${this.endpoint}/allorders`);
  }

  getparticularOrder(id): Observable<any> {
    const Api_link = `${this.endpoint}/read-order/${id}`;
    return this.http.get(Api_link, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  // update

  updateorder(id, data): Observable<any> {
    const Api_link = `${this.endpoint}/update-order/${id}`;
    return this.http.put(Api_link, data, { headers: this.headers });
    // .pipe(
    //     catchError(this.errorMgmt)
    // )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(errorMessage);
  }
}
