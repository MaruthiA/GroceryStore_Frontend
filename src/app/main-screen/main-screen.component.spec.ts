import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductServices } from '../services/product.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { MainScreenComponent } from './main-screen.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MainScreenComponent', () => {
  let component: MainScreenComponent;
  let fixture: ComponentFixture<MainScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MainScreenComponent],
      providers: [ProductServices],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
