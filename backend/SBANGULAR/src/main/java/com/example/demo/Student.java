package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student2")  // ✅ Table name in DB
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String branch;
    private String city;
    private int marks;

    // ✅ Default constructor (required by JPA)
    public Student() {}

    // ✅ Parameterized constructor (optional, for testing)
    public Student(int id, String name, String branch, String city, int marks) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.city = city;
        this.marks = marks;
    }

    // ✅ Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getBranch() { return branch; }
    public void setBranch(String branch) { this.branch = branch; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public int getMarks() { return marks; }
    public void setMarks(int marks) { this.marks = marks; }
}
