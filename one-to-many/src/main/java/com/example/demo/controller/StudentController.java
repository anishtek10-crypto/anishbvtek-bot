package com.example.demo.controller;

import com.example.demo.entity.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;

	@PostMapping
	public Student addStudent(@RequestBody Student student) {
		return studentRepository.save(student);
	}

	@GetMapping
	public Iterable<Student> getAllStudents() {
		return studentRepository.findAll();
	}
}