import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AllproductslistComponent } from './allproductlist.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductServices } from '../services/product.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AllproductslistComponent', () => {
  let component: AllproductslistComponent;
  let fixture: ComponentFixture<AllproductslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],

      declarations: [AllproductslistComponent],
      providers: [ProductServices],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
