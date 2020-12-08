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
import com.school.entity.Registration;
import com.school.repository.CourseRepository;
import com.school.repository.RegistrationRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")

public class RegistrationController {
	
	@Autowired
	RegistrationRepository registrationRepository;

	
	@PostMapping("/registration/add")
	public Registration addRegistration(@RequestBody Registration registration) {
		return registrationRepository.save(registration);
	}
	
	@GetMapping("/registrations")
	public Iterable<Registration> allRegistration() {
		return registrationRepository.findAll();
	}
	
	@GetMapping("/registration/{registration_id}")
	public Optional<Registration> studentById(@PathVariable("registration_id") int registration_id) {
		return registrationRepository.findById(registration_id);
	}
	
	@PutMapping("/registration/update")
	public Registration updateRegistration(@RequestBody Registration registration) {
		return registrationRepository.save(registration);
	}
	
	@DeleteMapping("/registration/delete/{registration_id}")
	public void deleteRegistration(@PathVariable("registration_id") int registration_id) {
		registrationRepository.deleteById(registration_id);
	}
	
	@GetMapping("/studentByCourse/{registration_id}")
	public List<Registration> studentByCourse(@PathVariable("registration_id") int course_id) {
		return registrationRepository.FindStudentByCourse(course_id);
	}
}
