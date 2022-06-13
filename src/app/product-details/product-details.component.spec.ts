import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartServices } from '../services/cart.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductDetailsComponent', () => {
  // let component: ProductDetailsComponent;
  // let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, RouterModule],

      declarations: [ProductDetailsComponent],
      providers: [CartServices],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
