import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './components/list-student/list-student.component';
import {AddStudentComponent} from './components/add-student/add-student.component';
import {UpdateStudentComponent} from './components/update-student/update-student.component';
import {DeleteStudentComponent} from './components/delete-student/delete-student.component';
import { StudentByIdComponent } from './components/student-by-id/student-by-id.component';

import {ListCourseComponent} from './components/list-course/list-course.component';
import {AddCourseComponent} from './components/add-course/add-course.component';
import {UpdateCourseComponent} from './components/update-course/update-course.component';
import {DeleteCourseComponent} from './components/delete-course/delete-course.component';

import {ListRegistrationComponent} from './components/list-registration/list-registration.component';
import {AddRegistrationComponent} from './components/add-registration/add-registration.component';
import {UpdateRegistrationComponent} from './components/update-registration/update-registration.component';
import {DeleteRegistrationComponent} from './components/delete-registration/delete-registration.component';


import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },

  {
    path: 'list-student',
    component: ListStudentComponent,
    data: {title: 'List of Students'}
  },

  {
    path: 'student/:student_id',
    component: StudentByIdComponent,
    data: {title: 'Student Data'}
  },

  {
    path: 'add-student',
    component: AddStudentComponent,
    data: {title: 'Add Student'}
  },

  {
    path: 'update-student/:student_id',
    component: UpdateStudentComponent,
    data: {title: 'Update Student'}
  },

  {
    path: 'delete-student/:student_id',
    component: DeleteStudentComponent,
    data: {title: 'Delete Student'}
  },

  {
    path: 'list-course',
    component: ListCourseComponent,
    data: {title: 'List of Course'}
  },

  {
    path: 'add-course',
    component: AddCourseComponent,
    data: {title: 'Add Course'}
  },

  {
    path: 'update-course/:course_id',
    component: UpdateCourseComponent,
    data: {title: 'Update Course'}
  },

  {
    path: 'delete-course/:course_id',
    component: DeleteCourseComponent,
    data: {title: 'Delete Course'}
  },

  {
    path: 'list-registration',
    component: ListRegistrationComponent,
    data: {title: 'List of Registration'}
  },

  {
    path: 'add-registration',
    component: AddRegistrationComponent,
    data: {title: 'Add Registration'}
  },

  {
    path: 'update-registration/:registration_id',
    component: UpdateRegistrationComponent,
    data: {title: 'Update Registration'}
  },

  {
    path: 'delete-registration/:registration_id',
    component: DeleteRegistrationComponent,
    data: {title: 'Delete Registration'}
  },

  {
    path: '',
    redirectTo: '/list-student',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
