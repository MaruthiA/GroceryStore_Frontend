import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainScreenAdminComponent } from './main-screen-admin.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('MainScreenAdminComponent', () => {
  let component: MainScreenAdminComponent;
  let fixture: ComponentFixture<MainScreenAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginComponent }
        ]),
        RouterModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      declarations: [MainScreenAdminComponent, LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScreenAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
