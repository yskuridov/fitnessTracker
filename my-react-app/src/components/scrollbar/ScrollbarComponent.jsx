import React, { useEffect, useRef, useState } from 'react';
import DailyExerciseComponent from '../exercises/DailyExerciseComponent';
import ExerciseService from '../../service/ExerciseService';
import FoodService from '../../service/FoodService';
import DailyMealComponent from '../food/DailyMealComponent';
import NutritionTableComponent from '../analysis/NutritionTableComponent';
import NutritionGoalComponent from '../analysis/NutritionGoalComponent';

function ScrollbarComponent({ username, date }) {
    const [exerciseScrollPosition, setExerciseScrollPosition] = useState(0);
    const [mealScrollPosition, setMealScrollPosition] = useState(0);
    const [dailyExercises, setDailyExercises] = useState([]);
    const [dailyMeals, setDailyMeals] = useState([]);
    const exerciseContainerRef = useRef();
    const mealContainerRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const fetchedExercises = await ExerciseService.getDailyExercisesByDateAndUsername(username, date);
            setDailyExercises(fetchedExercises);
        }
        async function fetchMeals() {
            const fetchedMeals = await FoodService.getDailyMealsByDateAndUsername(username, date);
            setDailyMeals(fetchedMeals);
        }
        fetchData();
        fetchMeals();
    }, []);

    const handleDelete = (item) => {
        if (item.exerciseDto != null) {
            const filteredExercises = dailyExercises.filter(exercise => exercise.exerciseDto.name !== item.exerciseDto.name);
            setDailyExercises(filteredExercises);
        } else {
            const filteredMeals = dailyMeals.filter(meal => meal.mealDto.name !== item.mealDto.name);
            setDailyMeals(filteredMeals);
        }
    };
    const handleExerciseScroll = (scrollAmount) => {
        const containerWidth = exerciseContainerRef.current.clientWidth;
        const contentWidth = exerciseContainerRef.current.scrollWidth;
        const maxScroll = contentWidth - containerWidth;
        const newScrollPosition = exerciseScrollPosition + scrollAmount;

        const clampedScrollPosition = Math.min(maxScroll, Math.max(0, newScrollPosition));
        setExerciseScrollPosition(clampedScrollPosition);
        exerciseContainerRef.current.scrollLeft = clampedScrollPosition;
    };

    const handleMealScroll = (scrollAmount) => {
        const containerWidth = mealContainerRef.current.clientWidth;
        const contentWidth = mealContainerRef.current.scrollWidth;
        const maxScroll = contentWidth - containerWidth;
        const newScrollPosition = mealScrollPosition + scrollAmount;

        const clampedScrollPosition = Math.min(maxScroll, Math.max(0, newScrollPosition));
        setMealScrollPosition(clampedScrollPosition);
        mealContainerRef.current.scrollLeft = clampedScrollPosition;
    }

    return (
        dailyExercises.length > 0 || dailyMeals.length > 0 ? (
            <div className='container' style={{ position: 'relative', overflow: 'hidden' }}>
                <div className='row'>
                    <div className='col-6'>
                        <h3 className='text-start text-success'>Exercises</h3>
                        <div style={{ display: 'flex', overflowX: 'auto', width: '100%', scrollbarWidth: 'none' }} ref={exerciseContainerRef}>
                            {dailyExercises.map((exercise, index) => (
                                <DailyExerciseComponent
                                    key={index}
                                    id={exercise.exerciseDto.id}
                                    name={exercise.exerciseDto.name}
                                    image={exercise.exerciseDto.imageUrl}
                                    targetMuscle={exercise.exerciseDto.targetMuscle}
                                    instructions={exercise.exerciseDto.instructions}
                                    summaryDate={date}
                                    handleDelete={handleDelete}
                                />
                            ))}
                        </div>
                        {dailyExercises.length > 2 && (
                            <div className='mx-auto my-auto'>
                                <button
                                    className="m-1 border border-success text-warning bg-dark"
                                    onClick={() => handleExerciseScroll(-150)}
                                >
                                    ←
                                </button>
                                <button
                                    className="m-1 border border-success text-warning bg-dark"
                                    onClick={() => handleExerciseScroll(150)}
                                >
                                    →
                                </button>
                            </div>
                        )}
                        <h3 className='text-start text-success'>Repas</h3>
                        <div style={{ display: 'flex', overflowX: 'auto', width: '100%', scrollbarWidth: 'none' }} ref={mealContainerRef}>
                            {dailyMeals.map((meal, index) => (
                                <DailyMealComponent 
                                    key={index} 
                                    id={meal.mealDto.id} 
                                    name={meal.mealDto.name}
                                    ingredients={meal.mealDto.ingredients} 
                                    nutrients={{ 'calories': meal.mealDto.calories, 'protein': meal.mealDto.protein, 'carbs': meal.mealDto.carbs, 'fat': meal.mealDto.fat, 'fiber': meal.mealDto.fiber, 'calcium': meal.mealDto.calcium, 'sodium': meal.mealDto.sodium, 'cholesterol': meal.mealDto.cholesterol }} 
                                    image={meal.mealDto.image} 
                                    servingWeight={meal.mealDto.servingPortion} 
                                    instructions={meal.mealDto.instructions} 
                                    summaryDate={date} 
                                    handleDelete={handleDelete} />
                            ))}
                        </div>
                        {dailyMeals.length > 2 && (
                            <div className='mx-auto my-auto'>
                                <button
                                    className="m-1 border border-success text-warning bg-dark"
                                    onClick={() => handleMealScroll(-150)}
                                >
                                    ←
                                </button>
                                <button
                                    className="m-1 border border-success text-warning bg-dark"
                                    onClick={() => handleMealScroll(150)}
                                >
                                    →
                                </button>
                            </div>)
                        }
                    </div>
                    <div className='col-6'>
                        <div className='row border border-secondary border-2 border-top-0 border-start-1 border-bottom-0 border-end-0' >
                            <h3 className='text-center text-info mt-3 mb-5'>Analyse</h3>
                            <div className='col-6 p-1 border border-2 border-secondary border-start-0 border-top-0 border-bottom-0'>
                                <NutritionTableComponent exercises={dailyExercises} meals={dailyMeals}/>
                                <p className='fs-4 fw-bold text-info mt-3 mb-0'>Vos données</p>
                            </div>
                            <div className='col-6 p-1'>
                                <NutritionGoalComponent/>
                                <p className='fs-4 fw-bold text-success mt-3 mb-0'>Objectif à viser</p>
                            </div>
                            <p className='text fs-6 text-warning fw-light fst-italic mt-5 '>*Une heure d'entraînement musculaire brûle en moyenne de 300 à 400 calories.</p>
                            <p className='text fs-6 text-warning fw-light fst-italic'>1 exercice choisi équivaut à -100 cal. dans le calcul calorique.</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : (<div>Vous n'avez pas planifié cette journée</div>)
    );
}

export default ScrollbarComponent;
