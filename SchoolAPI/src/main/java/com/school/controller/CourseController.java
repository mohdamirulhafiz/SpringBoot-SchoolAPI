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
import com.school.entity.Course;
import com.school.repository.CourseRepository;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")

public class CourseController {
	
	@Autowired
	CourseRepository courseRepository;

	
	@PostMapping("/course/add")
	public Course addCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}
	
	@GetMapping("/courses")
	public Iterable<Course> allStudent() {
		return courseRepository.findAll();
	}
	
	@GetMapping("/course/{course_id}")
	public Optional<Course> studentById(@PathVariable("course_id") int course_id) {
		return courseRepository.findById(course_id);
	}
	
	@PutMapping("/course/update")
	public Course updateCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}
	
	@DeleteMapping("/course/{course_id}")
	public void deleteCourse(@PathVariable("course_id") int course_id) {
		courseRepository.deleteById(course_id);
	}

}
