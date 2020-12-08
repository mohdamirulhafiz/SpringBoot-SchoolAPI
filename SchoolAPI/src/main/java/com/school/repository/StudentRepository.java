package com.school.repository;

import org.springframework.data.repository.CrudRepository;
import com.school.entity.Student;

public interface StudentRepository extends CrudRepository<Student, Integer> {
	
	
}