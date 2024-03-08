package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.DailyExerciseDto;
import com.example.fitnesstracker.dto.ExerciseDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.models.exercise.DailyExercise;
import com.example.fitnesstracker.models.exercise.Exercise;
import com.example.fitnesstracker.repository.DailyExerciseRepository;
import com.example.fitnesstracker.repository.DailySummaryRepository;
import com.example.fitnesstracker.repository.ExerciseRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ContextConfiguration;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ContextConfiguration(classes = {ExerciseService.class})
@ExtendWith(MockitoExtension.class)
public class ExerciseServiceTest {
    @Mock
    private ExerciseRepository exerciseRepository;
    @Mock
    private DailyExerciseRepository dailyExerciseRepository;
    @Mock
    private DailySummaryRepository dailySummaryRepository;
    @InjectMocks
    private ExerciseService exerciseService;

    @Test
    public void testCreateDailyExercise() throws Exception {
        Exercise exercise = new Exercise();
        exercise.setId(1l);
        exercise.setDescription("Hammer curls with dumbbells");
        exercise.setName("Hammer curls");
        exercise.setTargetMuscle(Exercise.Muscle.Arms);

        DailySummary summary = new DailySummary();
        summary.setId(4l);
        summary.setDate(LocalDateTime.now());
        summary.setExercises(new ArrayList<>());
        summary.setWaterIntake(2000);

        DailyExercise dailyExercise = new DailyExercise();
        dailyExercise.setExercise(exercise);
        dailyExercise.setDailySummary(summary);
        dailyExercise.setId(2l);
        dailyExercise.setNbReps(12);
        dailyExercise.setNbSets(3);
        dailyExercise.setRestTime(45);

        when(exerciseRepository.findById(any())).thenReturn(Optional.of(exercise));
        when(dailySummaryRepository.findById(any())).thenReturn(Optional.of(summary));
        when(dailyExerciseRepository.save(any())).thenReturn(new DailyExerciseDto(dailyExercise));

        DailyExerciseDto dto = exerciseService.createDailyExercise(new DailyExerciseDto(dailyExercise));

        assertEquals(dailyExercise.getDailySummary().getId(), dto.getDailySummaryId());
        assertEquals(dailyExercise.getExercise().getId(), dto.getExerciseId());

    }

    @Test
    public void createExercise(){
        Exercise exercise = new Exercise();
        exercise.setId(1l);
        exercise.setDescription("Standing shoulder press");
        exercise.setName("Shoulder press");
        exercise.setTargetMuscle(Exercise.Muscle.Shoulders);

        when(exerciseRepository.save(any())).thenReturn(exercise);

        ExerciseDto dto = exerciseService.createExercise(new ExerciseDto(exercise));

        assertEquals(dto.getId(), exercise.getId());
        assertEquals(dto.getName(), exercise.getName());
        assertEquals(dto.getTargetMuscle(), exercise.getTargetMuscle().toString());
        assertEquals(dto.getDescription(), exercise.getDescription());
    }

}
