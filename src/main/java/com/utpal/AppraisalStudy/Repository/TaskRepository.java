package com.utpal.AppraisalStudy.Repository;

import com.utpal.AppraisalStudy.Entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Tasks, Long> {
    public List<Tasks> findAllByOrderByIdAsc();
}
