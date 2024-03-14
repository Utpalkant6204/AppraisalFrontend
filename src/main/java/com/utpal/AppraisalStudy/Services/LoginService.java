package com.utpal.AppraisalStudy.Services;

import com.utpal.AppraisalStudy.Entity.DTO.LoginDTO;
import com.utpal.AppraisalStudy.Entity.DTO.LoginResponseDTO;

public interface LoginService {
    public LoginResponseDTO checkValidation(LoginDTO loginDTO);
}
