package com.example.fitnesstracker.controller;

import com.example.fitnesstracker.dto.ExerciseDto;
import com.example.fitnesstracker.models.exercise.Exercise;
import com.example.fitnesstracker.service.ExerciseService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(ExerciseController.class)
public class ExerciseControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ExerciseService exerciseService;

    @Test
    public void testCreateExercise() throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        Exercise exercise = new Exercise();
        exercise.setId(4l);
        exercise.setDescription("Hammer curls with dumbbells");
        exercise.setName("Hammer curls");
        exercise.setTargetMuscle(Exercise.Muscle.Arms);

        ExerciseDto dto = new ExerciseDto(exercise);

        String jsonContent = mapper.writeValueAsString(dto);

        when(exerciseService.createExercise(any())).thenReturn(dto);

        mockMvc.perform(post("/exercise")
                        .contentType("application/json")
                        .content(jsonContent))
                .andExpect(status().isOk());
    }

    @Test
    public void testCreateDailyExercise(){

    }
}
