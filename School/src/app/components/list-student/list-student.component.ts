import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Student } from '../../model/student.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  data: Student[] = [];
    isLoadingResults = true;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getStudentList().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

    }
}
