package com.utpal.AppraisalStudy.Controllers;

import com.utpal.AppraisalStudy.Entity.DTO.PlainTaskResponse;
import com.utpal.AppraisalStudy.Entity.DTO.TaskDTO;
import com.utpal.AppraisalStudy.Entity.Tasks;
import com.utpal.AppraisalStudy.Services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/getTask")
    public ResponseEntity<List<TaskDTO>> getTasks(){
        List<TaskDTO> tsk = taskService.getTasks();
        return new ResponseEntity<>(tsk, HttpStatus.OK);
    }


    @PostMapping("/employee/{id}/saveTask")
    public ResponseEntity<PlainTaskResponse> saveTask(@RequestBody Tasks tasks, @PathVariable("id") long Id){
        PlainTaskResponse tsk = taskService.saveTask(tasks, Id);
        return new ResponseEntity<>(tsk, HttpStatus.CREATED);
    }


    @PutMapping("/{id}/updateTask")
    public ResponseEntity<TaskDTO> upDateTask(@PathVariable("id") long Id, @RequestBody  TaskDTO taskDTO){
        TaskDTO tsk =  taskService.updateTasks(Id, taskDTO);
        return new ResponseEntity<>(tsk, HttpStatus.OK);
    }
}
