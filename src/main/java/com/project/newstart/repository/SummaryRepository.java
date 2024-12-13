package com.project.newstart.repository;

import com.project.newstart.entity.Summary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SummaryRepository extends JpaRepository<Summary, Long> {

    @Query(
            value="SELECT * FROM summary ORDER BY length(date) DESC, date DESC LIMIT 0,18",
            nativeQuery = true
    )
    List<Summary> getSummaryByCount();
}
