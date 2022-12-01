import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { PublicHolidayListComponent } from './components/public-holiday-list/public-holiday-list.component';
import { CategoriesCheckboxListComponent } from './components/categories-checkbox-list/categories-checkbox-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BoredActivityComponent } from './components/bored-activity/bored-activity.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidayListComponentModule } from './components/public-holiday-list/public-holiday-list.component-module';
import { HolidayServiceModule } from './services/holiday.service-module';
import { CategoriesCheckboxListComponentModule } from './components/categories-checkbox-list/categories-checkbox-list.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { RegisterServiceModule } from './services/register.service-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatServiceModule } from './services/cat.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UserServiceModule } from './services/user.service-module';
import { BoredActivityComponentModule } from './components/bored-activity/bored-activity.component-module';
import { BoredActivityServiceModule } from './services/bored-activity.service-module';
import { ProductsTableComponentModule } from './components/products-table/products-table.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'public-holidays', component: PublicHolidayListComponent }, { path: 'checkbox-categories', component: CategoriesCheckboxListComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: LoginComponent }, { path: 'register', component: RegisterComponent }, { path: 'cat-fact', component: CatFactComponent }, { path: 'age/:name', component: AgePredictionComponent }, { path: 'product/:id', component: ProductDetailsComponent }, { path: 'cart/:id', component: CartDetailsComponent }, { path: 'user/:id', component: UserDetailsComponent }, { path: 'activity', component: BoredActivityComponent }, { path: 'products-table', component: ProductsTableComponent }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoryServiceModule, CryptoChipsComponentModule, CryptoServiceModule, PublicHolidayListComponentModule, HolidayServiceModule, CategoriesCheckboxListComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginComponentModule, LoginServiceModule, RegisterComponentModule, RegisterServiceModule, CatFactComponentModule, CatServiceModule, AgePredictionComponentModule, AgeServiceModule, ProductDetailsComponentModule, ProductServiceModule, CartDetailsComponentModule, CartServiceModule, UserDetailsComponentModule, UserServiceModule, BoredActivityComponentModule, BoredActivityServiceModule, ProductsTableComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
