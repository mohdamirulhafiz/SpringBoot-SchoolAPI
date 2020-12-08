import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { DeleteCourseComponent } from './components/delete-course/delete-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { ListRegistrationComponent } from './components/list-registration/list-registration.component';
import { AddRegistrationComponent } from './components/add-registration/add-registration.component';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';
import { DeleteRegistrationComponent } from './components/delete-registration/delete-registration.component';
import { StudentByIdComponent } from './components/student-by-id/student-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    ListStudentComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    ListCourseComponent,
    AddRegistrationComponent,
    UpdateRegistrationComponent,
    DeleteRegistrationComponent,
    ListRegistrationComponent,
    StudentByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
