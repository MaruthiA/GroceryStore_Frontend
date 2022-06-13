import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../ordersshared/api.service';

@Component({
  selector: 'app-orders-update',
  templateUrl: './orders-update.component.html',
  styleUrls: ['./orders-update.component.scss']
})
export class OrdersUpdateComponent implements OnInit {
  text = 'Updateorder page';
  ordersForm: FormGroup;
  ngOnInit(): void {}

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private orderApi: ApiService
  ) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.orderApi.getparticularOrder(id).subscribe(data => {
      this.ordersForm = this.fb.group({
        id: [data._id],
        amount: [data.amount],
        status: [data.status]
      });
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.ordersForm.controls[controlName].hasError(errorName);
  };

  updateOrder() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.orderApi.updateorder(id, this.ordersForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/allorderslist'));
      });
    }
  }
}
