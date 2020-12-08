import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { Student } from '../model/student.model';
import { Course } from '../model/course.model';
import { Registration } from '../model/registration.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/api' //api from Node-UserProfileAPI

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login(users: Student): Observable<Student>{
    const url = `${apiUrl}/school/login`;
    return this.http.post<Student>(url, users, httpOptions).pipe(
      tap((u: Student)=>console.log(`Login Success`)),
      catchError(this.handleError<Student>('login'))
    );
  }

  getStudentList(): Observable<Student[]>{
    return this.http.get<Student[]>(`${apiUrl}/students`).pipe(
      tap(student => console.log('fetched students')),
      catchError(this.handleError('getStudentList', []))
    );
  }

  getStudentById(student_id: String): Observable<Student>{
    const url = `${apiUrl}/student/${student_id}`;
    return this.http.get<Student>(url).pipe(
      tap(_=> console.log(`fetched student id=${student_id}`)),
      catchError(this.handleError<Student>(`getStudentById id=${student_id}`))
    );
  }

  addStudent(student: Student): Observable<Student>{
    const url = `${apiUrl}/student/add`;
    return this.http.post<Student>(url, student, httpOptions).pipe(
      tap((u: Student)=>console.log(`Add Student`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  updateStudent(student_id:number, user: Student):Observable<any>{
    const url = `${apiUrl}/student/${student_id}/update`;
    return this.http.put(url, Student, httpOptions).pipe(
      tap(_=>console.log(`update student id=${student_id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteStudent(student_id: number):Observable<Student>{
    const url = `${apiUrl}/user/${student_id}/delete`;
    return this.http.delete<Student>(url,httpOptions).pipe(
      tap(_=>console.log(`deleted student id=${student_id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

}
