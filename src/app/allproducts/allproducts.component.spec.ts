import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { AllproductsComponent } from './allproducts.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductServices } from '../services/product.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AllproductsComponent', () => {
  let component: AllproductsComponent;
  let fixture: ComponentFixture<AllproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AllproductsComponent],
      providers: [ProductServices],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
