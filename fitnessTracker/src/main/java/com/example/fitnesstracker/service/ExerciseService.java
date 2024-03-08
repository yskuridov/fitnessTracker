package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.DailyExerciseDto;
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

import java.util.Optional;

@Service
public class ExerciseService {
    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private DailyExerciseRepository dailyExerciseRepository;
    @Autowired
    private DailySummaryRepository dailySummaryRepository;

    @Transactional
    public DailyExerciseDto createDailyExercise(DailyExerciseDto dto) throws Exception {
        Optional<DailySummary> summary = dailySummaryRepository.findById(dto.getDailySummaryId());
        Optional<Exercise> exercise = exerciseRepository.findById(dto.getExerciseId());
        if(summary.isEmpty() || exercise.isEmpty()) throw new Exception();
        DailySummary dailySummary = summary.get();
        DailyExercise dailyExercise = DailyExercise.builder().dailySummary(dailySummary).exercise(exercise.get()).nbReps(dto.getNbReps()).nbSets(dto.getNbSets()).restTime(dto.getRestTime()).build();
        summary.get().getExercises().add(dailyExercise);
        dailyExerciseRepository.save(dailyExercise);
        dailySummaryRepository.save(dailySummary);
        return new DailyExerciseDto(dailyExercise);
    }

    @Transactional
    public ExerciseDto createExercise(ExerciseDto dto){
        Exercise exercise = Exercise.builder().description(dto.getDescription()).name(dto.getName()).targetMuscle(Exercise.Muscle.valueOf(dto.getTargetMuscle())).build();
        return new ExerciseDto(exerciseRepository.save(exercise));
    }

}
