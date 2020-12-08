import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Student } from '../../model/student.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-student-by-id',
  templateUrl: './student-by-id.component.html',
  styleUrls: ['./student-by-id.component.css']
})
export class StudentByIdComponent implements OnInit {

  student: Student = { student_id: '', first_name: '', last_name: '', email: ''};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getStudentDetails(this.route.snapshot.params.id);
    console.log("student_id", this.route.snapshot.params.id);
  }

  getStudentDetails(student_id: String) {
    this.api.getStudentById(student_id).subscribe((data:any) => {
      this.student = data;
      console.log(this.student);
      this.isLoadingResults = false;
    });
  }

}
