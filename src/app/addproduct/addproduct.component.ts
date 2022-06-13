import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  constructor(private http: HttpClient) {}
  category: Category[];
  selectedFile: File;
  ngOnInit(): void {
    this.http
      .get<{ [key: string]: Category }>(
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
        this.category = category;
      });
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  addProductClicked(form: NgForm) {
    const formData: any = new FormData();
    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('price', form.value.price);
    formData.append('stock', form.value.stock);
    formData.append('category', form.value.category);
    formData.append(
      'productImage',
      this.selectedFile,
      form.value.productImagePath
    ); // this.selectedFile.name in place of form.value.productImagePath

    this.http
      .post<any>('https://grocerystore--api.herokuapp.com/api/product/create', formData)
      .subscribe(responseData => {
        // console.log(responseData);
        if (responseData.product != null) {
          alert('Successfully Added Product');
        }
      });
    form.reset();
  }
}
