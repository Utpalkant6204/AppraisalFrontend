package com.utpal.AppraisalStudy.Services;

import com.utpal.AppraisalStudy.Entity.DTO.PlainTaskResponse;
import com.utpal.AppraisalStudy.Entity.DTO.TaskDTO;
import com.utpal.AppraisalStudy.Entity.Tasks;

import java.util.List;

public interface TaskService {
    public PlainTaskResponse saveTask(Tasks tasks, long Id);

    public List<TaskDTO> getTasks();

    public TaskDTO updateTasks(long id, TaskDTO taskDTO);
}
