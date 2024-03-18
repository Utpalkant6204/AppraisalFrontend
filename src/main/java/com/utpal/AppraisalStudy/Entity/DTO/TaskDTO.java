package com.utpal.AppraisalStudy.Entity.DTO;

import jakarta.annotation.Nullable;

import java.time.LocalDate;


public class TaskDTO {
    @Nullable
    private long id;

    private String name;
    private String description;
    private LocalDate startDate;

    private LocalDate endDate;
    private boolean isAppraisable;

    private long rating;


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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
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
}
