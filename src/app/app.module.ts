import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductServices } from './services/product.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartServices } from './services/cart.service';
import { NewOrderServices } from './services/neworder.service';
import { FooterComponent } from './footer/footer.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AllproductslistComponent } from './allproductlist/allproductlist.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ApiService } from './ordersshared/api.service';
import { MainScreenAdminComponent } from './main-screen-admin/main-screen-admin.component';
import { AllordersComponent } from './allorders/allorders.component';
import { CustomersComponent } from './customers/customers.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { OrdersUpdateComponent } from './orders-update/orders-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainScreenComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    CartComponent,
    FooterComponent,
    MyordersComponent,

    AllproductsComponent,
    AllproductslistComponent,
    HeaderAdminComponent,
    MainScreenAdminComponent,
    AllordersComponent,
    CustomersComponent,
    AddcategoryComponent,
    AddproductComponent,
    ShowproductsComponent,
    OrdersUpdateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2PageScrollModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [ProductServices, CartServices, NewOrderServices, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
