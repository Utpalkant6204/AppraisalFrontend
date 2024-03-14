package com.utpal.AppraisalStudy.Entity.DTO;

public class PlainTaskResponse {
    private String description;
    private long timeTakenForCompletion;
    private boolean isAppraisable;



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

}
