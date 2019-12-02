import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// login jwt
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './api/auth.guard';
import {AuthAdmin} from './api/auth.admin';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { ProductComponent } from './product-view/product/product.component';
import { ProductCreateComponent } from './product-view/product-create/product-create.component';
import { ProductDetailComponent } from './product-view/product-detail/product-detail.component';
import { ProductEditComponent } from './product-view/product-edit/product-edit.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category-view/category/category.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { InfoUserComponent } from './user-view/info-user/info-user.component';
import { CartComponent } from './cart-view/cart/cart.component';
import { BodyadminComponent } from './admin/bodyadmin/bodyadmin.component';
import { OrdersuccessComponent } from './order/ordersuccess/ordersuccess.component';
import { QlproductComponent } from './admin/qlproduct/qlproduct.component';
import { QlorderComponent } from './admin/qlorder/qlorder.component';
import { QluserComponent } from './admin/qluser/qluser.component';
import { QluserCreateComponent } from './admin/qluser/qluser-create/qluser-create.component';
import { QluserEditComponent } from './admin/qluser/qluser-edit/qluser-edit.component';
import { QlproductCreateComponent } from './admin/qlproduct/qlproduct-create/qlproduct-create.component';
import { QlproductEditComponent } from './admin/qlproduct/qlproduct-edit/qlproduct-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Đăng kí' }
  },
  {
    path: 'category',
    component: CategoryComponent,
    data: { title: 'Danh muc' }
  },
  
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent,
    data: { title: 'Chi tiết sản phẩm' }
  },
  
  {
    path: 'user-info',
    component: InfoUserComponent,
    canActivate: [AuthGuard],//phai dang nhap moi vao dc trang
    data: { title: 'Thông tin User' }
  },
  {
    path: 'mycart',
    component: CartComponent,
    canActivate: [AuthGuard],//phai dang nhap moi vao dc trang
    data: { title: 'Thông tin User' }
  }
  ,
  {
    path: 'success',
    component: OrdersuccessComponent,
    canActivate: [AuthGuard],//phai dang nhap moi vao dc trang
    data: { title: 'Success' }
  },
  {
    path: 'admin',
    component: BodyadminComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Thông tin Admin' }
  }
  ,
  {
    path: 'admin/qluser',
    component: QluserComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Danh sách User' }
  }
  ,
  {
    path: 'admin/qlproduct',
    component: QlproductComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Danh sách San phẩm' }
  }
  ,
  {
    path: 'admin/qlorder',
    component: QlorderComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Danh sách User' }
  }
  ,
  {
    path: 'admin/qluser/create',
    component: QluserCreateComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Thêm User' }
  }
  ,
  {
    path: 'admin/qluser/edit',
    component: QluserEditComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Cập nhật User' }
  }
  ,
  {
    path: 'admin/qlproduct/create',
    component: QlproductCreateComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Danh sách San phẩm' }
  }
  ,
  {
    path: 'admin/qlproduct/edit',
    component: QlproductEditComponent,
    canActivate: [AuthAdmin],//phai dang nhap moi vao dc trang
    data: { title: 'Danh sách San phẩm' }
  }
];

@NgModule({
  declarations: [

    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    HomeComponent,
    RegisterComponent,
    InfoUserComponent,
    CartComponent,
    BodyadminComponent,
    OrdersuccessComponent,
    QlproductComponent,
    QlorderComponent,
    QluserCreateComponent, 
    QluserEditComponent , 
    QlproductCreateComponent, 
    QlproductEditComponent, 
    QluserComponent
  ],
  imports: [

    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
     // Add this import here
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/api/auth']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
