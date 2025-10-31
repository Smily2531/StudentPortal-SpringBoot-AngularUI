package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    @Autowired
    private StudentRepository repo;

    @GetMapping("/getall")
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student) {
        return repo.save(student);
    }
}
