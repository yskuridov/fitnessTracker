package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.DailyExerciseDto;
import com.example.fitnesstracker.dto.DailySummaryDto;
import com.example.fitnesstracker.dto.ExerciseDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.models.exercise.DailyExercise;
import com.example.fitnesstracker.models.exercise.Exercise;
import com.example.fitnesstracker.repository.DailyExerciseRepository;
import com.example.fitnesstracker.repository.DailySummaryRepository;
import com.example.fitnesstracker.repository.ExerciseRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private DailyExerciseRepository dailyExerciseRepository;
    @Autowired
    private DailySummaryRepository dailySummaryRepository;
    @Autowired
    private DailySummaryService dailySummaryService;


    @Transactional
    public DailyExerciseDto createDailyExercise(DailyExerciseDto dto) {
        validateEntries(dto);
        DailySummary dailySummary = dailySummaryRepository.findByUser_UsernameAndDate(dto.getDailySummaryDto().getUsername(), LocalDateTime.parse(dto.getDailySummaryDto().getDate()));
        Exercise exercise = exerciseRepository.findByName(dto.getExerciseDto().getName());
        DailyExercise dailyExercise = DailyExercise.builder().dailySummary(dailySummary).exercise(exercise).build();
        dailySummary.getExercises().add(dailyExercise);
        dailyExerciseRepository.save(dailyExercise);
        dailySummaryRepository.save(dailySummary);
        return new DailyExerciseDto(dailyExercise);
    }

    private void validateEntries(DailyExerciseDto dto){
        DailySummary summary = dailySummaryRepository.findByUser_UsernameAndDate(dto.getDailySummaryDto().getUsername(), LocalDateTime.parse(dto.getDailySummaryDto().getDate()));
        Optional<Exercise> exercise = exerciseRepository.findById(dto.getExerciseDto().getId());
        if(exercise.isEmpty()) createExercise(dto.getExerciseDto());
        if(summary == null) dailySummaryService.createDailySummary(dto.getDailySummaryDto());
    }

    @Transactional
    public ExerciseDto createExercise(ExerciseDto dto){
        Exercise exercise = Exercise.builder().name(dto.getName()).targetMuscle(Exercise.Muscle.valueOf(dto.getTargetMuscle())).build();
        return new ExerciseDto(exerciseRepository.save(exercise));
    }

    public List<DailyExerciseDto> getExercisesByUsername(String username){
        List<DailyExercise> dailyExercises = dailyExerciseRepository.findAllByDailySummary_User_Username(username);
        List<DailyExerciseDto> dtos = new ArrayList<>();
        for(DailyExercise d : dailyExercises) dtos.add(new DailyExerciseDto(d));
        return dtos;
    }

}
