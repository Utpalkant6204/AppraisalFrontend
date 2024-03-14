package com.utpal.AppraisalStudy.Entity.DTO;

import com.utpal.AppraisalStudy.Entity.Tasks;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

public class EmployeeDTO {

    private long id;
    private String name;
    private String email;
    private String phoneNumber;
    private LocalDate dateOfJoining;
    private String designation;
    private long tenure;


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

    public long getTenure() {
        return tenure;
    }

    public void setTenure(long tenure) {
        this.tenure = tenure;
    }

}
