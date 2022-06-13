import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AllproductslistComponent } from './allproductlist/allproductlist.component';

import { MainScreenAdminComponent } from './main-screen-admin/main-screen-admin.component';
import { AllordersComponent } from './allorders/allorders.component';
import { CustomersComponent } from './customers/customers.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { OrdersUpdateComponent } from './orders-update/orders-update.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainScreenComponent },
  { path: 'login', component: LoginComponent },

  { path: 'adminmain', component: MainScreenAdminComponent },

  { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'mycart', component: CartComponent },
  { path: 'allproducts', component: AllproductsComponent },
  { path: 'allproductlist', component: AllproductslistComponent },
  { path: 'myorders', component: MyordersComponent },

  { path: 'allorders', component: AllordersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'addcategory', component: AddcategoryComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'showproducts', component: ShowproductsComponent },
  { path: 'orders-update/:id', component: OrdersUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
