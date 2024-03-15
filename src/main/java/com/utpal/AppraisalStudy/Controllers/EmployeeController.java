package com.utpal.AppraisalStudy.Controllers;

import com.utpal.AppraisalStudy.Entity.DTO.EmployeeDTO;
import com.utpal.AppraisalStudy.Entity.DTO.EmployeeWithListDTO;
import com.utpal.AppraisalStudy.Entity.Employees;
import com.utpal.AppraisalStudy.Services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/getEmployees")
    public ResponseEntity<List<EmployeeWithListDTO>> getEmployees(){
        List<EmployeeWithListDTO> emp = employeeService.getAllEmployees();
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    @GetMapping("/{id}/getEmployee")
    public ResponseEntity<EmployeeDTO> getEmployee(@PathVariable("id") long Id){
        EmployeeDTO employeeWithListDTO = employeeService.getEmployee(Id);
        return new ResponseEntity<>(employeeWithListDTO, HttpStatus.OK);
    }
    @PostMapping("/saveEmployee")
    public ResponseEntity<EmployeeDTO> saveEmployee(@RequestBody Employees employees){
        EmployeeDTO emp = employeeService.saveEmployees(employees);
        return new ResponseEntity<>(emp, HttpStatus.CREATED);
    }
}
