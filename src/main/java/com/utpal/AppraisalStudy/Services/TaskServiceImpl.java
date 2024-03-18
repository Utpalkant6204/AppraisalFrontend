package com.utpal.AppraisalStudy.Services;

import com.utpal.AppraisalStudy.Entity.DTO.PlainTaskResponse;
import com.utpal.AppraisalStudy.Entity.DTO.TaskDTO;
import com.utpal.AppraisalStudy.Entity.Employees;
import com.utpal.AppraisalStudy.Entity.Tasks;
import com.utpal.AppraisalStudy.Exceptions.UserNotFoundException;
import com.utpal.AppraisalStudy.Repository.EmployeeRepository;
import com.utpal.AppraisalStudy.Repository.TaskRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PlainTaskResponse saveTask(Tasks tasks, long Id) {
        Optional<Employees> optionalEmployee = employeeRepository.findById(Id);

        if (optionalEmployee.isPresent()) {
            Employees employee = optionalEmployee.get();
            tasks.setEmployees(employee);
            employee.getTasks().add(tasks);
            Employees savedEmployee = employeeRepository.save(employee);

            return modelMapper.map(tasks,PlainTaskResponse.class);
        } else {
            throw new UserNotFoundException("Employee not found with id: " + Id);
        }
    }

    @Override
    public List<TaskDTO> getTasks() {
        List<Tasks> tsk = taskRepository.findAllByOrderByIdAsc();
        return tsk.stream().map((post1) -> this.modelMapper.map(post1, TaskDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public TaskDTO updateTasks(long id, TaskDTO taskDTO) {
        Optional<Tasks> optionalTask = taskRepository.findById(id);
        System.out.println(id);
        if(optionalTask.isPresent()){
            Tasks task = optionalTask.get();
            if(Objects.nonNull(taskDTO.getName()) && !"".equalsIgnoreCase(task.getName())){
                task.setName(taskDTO.getName());
            }

            if(Objects.nonNull(taskDTO.getDescription()) && !"".equalsIgnoreCase(taskDTO.getDescription())){
                task.setDescription(taskDTO.getDescription());
            }

            if(Objects.nonNull(taskDTO.getStartDate()) && taskDTO.getStartDate() != null){
                task.setStartDate(taskDTO.getStartDate());
            }

            if(Objects.nonNull(taskDTO.getEndDate()) && taskDTO.getEndDate() != null){
                task.setEndDate(taskDTO.getEndDate());
            }

            task.setAppraisable(taskDTO.isAppraisable());

            System.out.println(taskDTO.getName());
            task.setRating(taskDTO.getRating());
            Tasks updatedTask = taskRepository.save(task);

            return modelMapper.map(updatedTask, TaskDTO.class);

        }
        else {
            throw new UserNotFoundException("Task not found with id: " + id);
        }
    }
}
