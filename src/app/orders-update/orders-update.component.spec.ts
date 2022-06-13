import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrdersUpdateComponent } from './orders-update.component';
import { ApiService } from '../ordersshared/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('OrdersUpdateComponent', () => {
  let component: OrdersUpdateComponent;
  let fixture: ComponentFixture<OrdersUpdateComponent>;
  let de:DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      declarations: [OrdersUpdateComponent],
      providers: [ApiService]
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Update order page'`,async()=>{
    expect(component.text).toEqual('Updateorder page');
  });


});
