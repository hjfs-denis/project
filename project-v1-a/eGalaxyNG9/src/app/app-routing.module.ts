import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { OrderListComponent } from './cart/order-list/order-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  // { path: '', redirectTo: 'eGalaxy/users/register', pathMatch: 'full' },
  { path: 'eGalaxy/users/register', component: AddUserComponent },
  { path: 'eGalaxy/users/list', component: UserListComponent },
  { path: 'eGalaxy/users/update/:id', component: UpdateUserComponent },
  { path: 'eGalaxy/users/login', component: UserLoginComponent },

  { path: "eGalaxy/courses", component: CourseListComponent },
  { path: "eGalaxy/courses/add", component: CreateCourseComponent },
  { path: "eGalaxy/courses/update/:id", component: UpdateCourseComponent },
  { path: "eGalaxy/courses/details/:id", component: CourseDetailsComponent },

  { path: "eGalaxy/carts", component: CartListComponent },
  { path: "eGalaxy/carts/:id", component: CartListComponent },
  { path: "eGalaxy/orders", component: OrderListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
