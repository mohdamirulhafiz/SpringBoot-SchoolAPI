package com.school.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.school.entity.Student;
import com.school.repository.StudentRepository;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")

public class StudentController {
	
	@Autowired
	StudentRepository studentRepository;

	
	@PostMapping("/student/add")
	public Student addStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}
	
	@GetMapping("/students")
	public Iterable<Student> allStudent() {
		return studentRepository.findAll();
	}
	
	@GetMapping("/student/{student_id}")
	public Optional<Student> studentById(@PathVariable("student_id") int studentID) {
		return studentRepository.findById(studentID);
	}
	
	@PutMapping("/student/update/{student_id}")
	public Student updateStudent(@PathVariable("student_id") int student_id, @RequestBody Student studentData) throws Exception {
		Student student = studentRepository.findById(student_id)
				.orElseThrow(() -> new Exception());
		student.setFirst_name(studentData.getFirst_name());
		student.setLast_name(studentData.getLast_name());
		student.setEmail(studentData.getEmail());
		
		Student updateStud = studentRepository.save(student);
		return updateStud;
	}
	
	
	@DeleteMapping("/student/delete/{student_id}")
	public void deleteStudent(@PathVariable("student_id") int student_id) {
		studentRepository.deleteById(student_id);
	}

}
