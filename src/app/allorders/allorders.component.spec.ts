import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AllordersComponent } from './allorders.component';
import { LoginComponent } from '../login/login.component';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AllordersComponent', () => {
  let component: AllordersComponent;
  let fixture: ComponentFixture<AllordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginComponent }
        ])
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      declarations: [AllordersComponent, LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
