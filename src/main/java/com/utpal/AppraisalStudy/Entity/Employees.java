package com.utpal.AppraisalStudy.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.Period;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Employees {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    @NotBlank(message = "name is required")
    @Size(min = 3, message = "minimum 3 character required")
    private String name;

    @Column(nullable = false, unique = true)
    @Email(message = "Email should be valid")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "Password is required")
    @Size(min = 8, message = "Password should be atleast 8 character")
    private String password;

    private String phoneNumber;

    @Column(nullable = false)
    @NotNull(message = "Date of Joining required")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfJoining;

    @Column(nullable = false)
    @NotBlank(message = "Designation is required")
    private String designation;

    @Column(nullable = false)
    private boolean isAdmin = false;

    @Transient
    private long tenure;

    @OneToMany(mappedBy = "employees", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Tasks> tasks= new HashSet<>();

    // Constructors, getters, and setters

    public Employees() {
    }

    public Employees(long id, String name, String email, String password, String phoneNumber, LocalDate dateOfJoining, String designation, Set<Tasks> tasks) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.dateOfJoining = dateOfJoining;
        this.designation = designation;
        this.tasks = tasks;
    }

    // Getters and setters


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public LocalDate getDateOfJoining() {
        return dateOfJoining;
    }

    public void setDateOfJoining(LocalDate dateOfJoining) {
        this.dateOfJoining = dateOfJoining;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public long getTenure() {
        return tenure;
    }

    public void setTenure(long tenure) {
        this.tenure = tenure;
    }

    public Set<Tasks> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Tasks> tasks) {
        this.tasks = tasks;
    }

    @PostLoad
    @PrePersist
    private void calculateAndSetTenure() {
        LocalDate currentDate = LocalDate.now();
        Period period = Period.between(dateOfJoining, currentDate);
        this.tenure = period.toTotalMonths();
    }
}
