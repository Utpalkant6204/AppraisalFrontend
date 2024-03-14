package com.utpal.AppraisalStudy.Exceptions;

import org.springframework.web.bind.annotation.ExceptionHandler;


public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(String msg){
        super(msg);
    }

    public UserNotFoundException() {
    }
}
