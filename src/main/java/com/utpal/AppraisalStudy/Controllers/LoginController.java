package com.utpal.AppraisalStudy.Controllers;

import com.utpal.AppraisalStudy.Entity.DTO.LoginDTO;
import com.utpal.AppraisalStudy.Entity.DTO.LoginResponseDTO;
import com.utpal.AppraisalStudy.Services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> getLoginInfo(@RequestBody LoginDTO loginDTO){
        LoginResponseDTO loginResponseDTO = loginService.checkValidation(loginDTO);
        return new ResponseEntity<>(loginResponseDTO, HttpStatus.OK);
    }
}
