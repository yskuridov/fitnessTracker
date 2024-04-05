package com.example.fitnesstracker.service;

import com.example.fitnesstracker.dto.DailyExerciseDto;
import com.example.fitnesstracker.dto.DailySummaryDto;
import com.example.fitnesstracker.dto.ExerciseDto;
import com.example.fitnesstracker.models.DailySummary;
import com.example.fitnesstracker.models.exercise.DailyExercise;
import com.example.fitnesstracker.models.exercise.Exercise;
import com.example.fitnesstracker.models.user.AppUser;
import com.example.fitnesstracker.repository.DailyExerciseRepository;
import com.example.fitnesstracker.repository.DailySummaryRepository;
import com.example.fitnesstracker.repository.ExerciseRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.context.ContextConfiguration;

import java.time.LocalDate;
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
    @Mock
    private DailySummaryService dailySumaryService;
    @InjectMocks
    private ExerciseService exerciseService;

    @Test
    public void testCreateDailyExercise() throws Exception {
        AppUser user = new AppUser();
        user.setUsername("username");
        user.setBodyType(AppUser.BodyType.Ectomorph);
        user.setGender(AppUser.Gender.Male);
        user.setObjective(AppUser.Objective.LoseWeight);

        Exercise exercise = new Exercise();
        exercise.setId(1l);
        exercise.setName("Hammer curls");
        exercise.setTargetMuscle(Exercise.Muscle.arms);

        DailySummary summary = new DailySummary();
        summary.setId(4l);
        summary.setDate(LocalDate.now());
        summary.setExercises(new ArrayList<>());
        summary.setUser(user);
        summary.setWaterIntake(2000);
        summary.setExercises(new ArrayList<>());

        DailyExercise dailyExercise = new DailyExercise();
        dailyExercise.setExercise(exercise);
        dailyExercise.setDailySummary(summary);
        dailyExercise.setId(2l);

        when(exerciseRepository.findByName(any())).thenReturn(exercise);
        when(dailyExerciseRepository.save(any())).thenReturn(dailyExercise);
        when(dailySummaryRepository.findByUser_UsernameAndDate(any(), any())).thenReturn(summary);

        DailyExerciseDto dto = exerciseService.createDailyExercise(new DailyExerciseDto(dailyExercise));

        assertEquals(dailyExercise.getDailySummary().getDate(), dto.getDailySummaryDto().getDate());
        assertEquals(dailyExercise.getExercise().getId(), dto.getExerciseDto().getId());

    }

    @Test
    public void createExercise(){
        Exercise exercise = new Exercise();
        exercise.setId(1l);
        exercise.setName("Shoulder press");
        exercise.setTargetMuscle(Exercise.Muscle.shoulders);

        when(exerciseRepository.save(any())).thenReturn(exercise);

        ExerciseDto dto = exerciseService.createExercise(new ExerciseDto(exercise));

        assertEquals(dto.getId(), exercise.getId());
        assertEquals(dto.getName(), exercise.getName());
        assertEquals(dto.getTargetMuscle(), exercise.getTargetMuscle().toString());
    }

}
