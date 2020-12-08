package com.school.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.school.entity.Course;
import com.school.entity.Registration;
import com.school.entity.Student;

public interface RegistrationRepository extends CrudRepository<Registration, Integer> {
	
	@Query(value="SELECT * FROM course_registration left join course using (course_id) where course_id = :course_id", nativeQuery = true)
	List<Registration> FindStudentByCourse(@Param ("course_id") int course_id); 
	
}