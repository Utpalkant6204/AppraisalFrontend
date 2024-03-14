package com.utpal.AppraisalStudy.Entity.DTO;

public class ExceptionDTO {
    private String message;
    private long status;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public long getStatus() {
        return status;
    }

    public void setStatus(long status) {
        this.status = status;
    }
}
