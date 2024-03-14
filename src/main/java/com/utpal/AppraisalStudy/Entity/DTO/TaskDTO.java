package com.utpal.AppraisalStudy.Entity.DTO;

import jakarta.annotation.Nullable;


public class TaskDTO {
    @Nullable
    private long id;
    private String description;
    private long timeTakenForCompletion;
    private boolean isAppraisable;

    private long rating;


    public long getId() {
        return id;
    }

    public void setId(long id) {
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
}
