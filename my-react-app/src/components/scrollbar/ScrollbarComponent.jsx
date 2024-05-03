import React, { useEffect, useRef, useState } from 'react';
import DailyExerciseComponent from '../exercises/DailyExerciseComponent';
import ExerciseService from '../../service/ExerciseService';
import FoodService from '../../service/FoodService';
import DailyMealComponent from '../food/DailyMealComponent';

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
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
                            />
                        ))}
                    </div>
                    <div className='mx-auto my-auto'>
                            <button
                                className="m-1 border border-success text-warning bg-dark"
                                onClick={() => handleExerciseScroll(-300)}
                            >
                                ←
                            </button>
                            <button
                                className="m-1 border border-success text-warning bg-dark"
                                onClick={() => handleExerciseScroll(300)}
                            >
                                →
                            </button>
                        </div>
                    <h3 className='text-start text-success'>Repas</h3>
                    <div style={{ display: 'flex', overflowX: 'auto', width: '100%', scrollbarWidth: 'none' }} ref={mealContainerRef}>
                        {dailyMeals.map((meal, index) => (
                            <DailyMealComponent key={index} id={meal.mealDto.id} name={meal.mealDto.name} ingredients={meal.mealDto.ingredients} nutrients={{'calories': meal.mealDto.calories, 'protein': meal.mealDto.protein, 'carbs': meal.mealDto.carbs, 'fat': meal.mealDto.fat, 'fiber': meal.mealDto.fiber, 'calcium': meal.mealDto.calcium, 'sodium': meal.mealDto.sodium, 'cholesterol': meal.mealDto.cholesterol}} image={meal.mealDto.image} servingWeight={meal.mealDto.servingPortion} instructions={meal.mealDto.instructions} summaryDate={date} />
                        ))}
                    </div>
                    <div className='mx-auto my-auto'>
                            <button
                                className="m-1 border border-success text-warning bg-dark"
                                onClick={() => handleMealScroll(-300)}
                            >
                                ←
                            </button>
                            <button
                                className="m-1 border border-success text-warning bg-dark"
                                onClick={() => handleMealScroll(300)}
                            >
                                →
                            </button>
                        </div>
                    <p className='text fs-6 text-warning fw-light fst-italic mt-5 '>*Une heure d'entraînement musculaire brûle en moyenne de 300 à 400 calories.</p>
                    <p className='text fs-6 text-warning fw-light fst-italic'>3 exercices choisis équivalent à une heure d'exercice dans le calcul calorique.</p>
                </div>
            </div>
        ) : (<div>lul</div>)
    );
}

export default ScrollbarComponent;
