package com.utpal.AppraisalStudy.Services;

import com.utpal.AppraisalStudy.Entity.DTO.EmployeeDTO;
import com.utpal.AppraisalStudy.Entity.DTO.EmployeeWithListDTO;
import com.utpal.AppraisalStudy.Entity.DTO.TaskDTO;
import com.utpal.AppraisalStudy.Entity.Employees;
import com.utpal.AppraisalStudy.Entity.Tasks;
import com.utpal.AppraisalStudy.Exceptions.UserNotFoundException;
import com.utpal.AppraisalStudy.Repository.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public EmployeeDTO saveEmployees(Employees employees) {
        Employees emp =  employeeRepository.save(employees);
        EmployeeDTO edto = modelMapper.map(emp, EmployeeDTO.class);
        return edto;
    }

    @Override
    public List<EmployeeWithListDTO> getAllEmployees() {
        List<Employees> emp = employeeRepository.findAllByOrderByIdAsc();
        return emp.stream().map(this::mapEmployeeWithSortedTasks)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO getEmployee(long Id) {
        Optional<Employees> emp = employeeRepository.findById(Id);

        if(emp.isPresent()){
            Employees employees = emp.get();
            return modelMapper.map(employees, EmployeeDTO.class);
        }else{
            throw new UserNotFoundException("Employee Not found with Id : " + Id);
        }
    }


    private EmployeeWithListDTO mapEmployeeWithSortedTasks(Employees employees) {
        EmployeeWithListDTO employeeDTO = this.modelMapper.map(employees, EmployeeWithListDTO.class);

        List<TaskDTO> sortedTasks = employeeDTO.getTasks().stream()
                .sorted(Comparator.comparingLong(TaskDTO::getId))
                .toList();

        employeeDTO.setTasks(new ArrayList<>(sortedTasks));

        return employeeDTO;
    }
}
