import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm!: FormGroup;
  first_name!: '';
  last_name!: '';
  email!: '';
  isLoadingResults = false;

  constructor(private router: Router,private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  onFormSubmit(){
    this.isLoadingResults = true;
    this.api.addStudent(this.studentForm.value).subscribe((res: any)=>{
      const id = res.student_id;
      console.log(id);
      this.isLoadingResults = false;
      this.router.navigate(['/']);
    },(err: any)=>{
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
