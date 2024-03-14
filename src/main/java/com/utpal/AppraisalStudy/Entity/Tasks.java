package com.utpal.AppraisalStudy.Entity;

import jakarta.persistence.*;


@Entity
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private long timeTakenForCompletion; // In minutes

    @Column(nullable = false)
    private boolean isAppraisable;

    private long rating = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id")
    private Employees employees;


    // Constructors, getters, and setters

    public Tasks() {
    }

    public Tasks(long id, String description, long timeTakenForCompletion, boolean isAppraisable, long rating, Employees employees) {
        this.id = id;
        this.description = description;
        this.timeTakenForCompletion = timeTakenForCompletion;
        this.isAppraisable = isAppraisable;
        this.rating = rating;
        this.employees = employees;
    }

// Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getTimeTakenForCompletion() {
        return timeTakenForCompletion;
    }

    public void setTimeTakenForCompletion(long timeTakenForCompletion) {
        this.timeTakenForCompletion = timeTakenForCompletion;
    }

    public boolean isAppraisable() {
        return isAppraisable;
    }

    public void setAppraisable(boolean appraisable) {
        isAppraisable = appraisable;
    }

    public long getRating() {
        return rating;
    }

    public void setRating(long rating) {
        this.rating = rating;
    }

    public Employees getEmployees() {
        return employees;
    }

    public void setEmployees(Employees employees) {
        this.employees = employees;
    }
}
