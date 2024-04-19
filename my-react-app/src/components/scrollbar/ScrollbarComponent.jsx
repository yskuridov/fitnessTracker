import React, { useEffect, useRef, useState } from 'react';
import DailyExerciseComponent from '../dailysummary/DailyExerciseComponent';
import ExerciseService from '../../service/ExerciseService';

function ScrollbarComponent({ username, date }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [dailyExercises, setDailyExercises] = useState([]);
    const containerRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const fetchedExercises = await ExerciseService.getDailyExercisesByDateAndUsername(username, date);
            setDailyExercises(fetchedExercises);
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log(dailyExercises);
    }, [dailyExercises]);

    const handleScroll = (scrollAmount) => {
        const containerWidth = containerRef.current.clientWidth;
        const contentWidth = containerRef.current.scrollWidth;
        const maxScroll = contentWidth - containerWidth;
        
        const newScrollPosition = scrollPosition + scrollAmount;

        const clampedScrollPosition = Math.min(maxScroll, Math.max(0, newScrollPosition));
        setScrollPosition(clampedScrollPosition);
        containerRef.current.scrollLeft = clampedScrollPosition;
    };

    return (
        dailyExercises.length > 0 ? (
            <div className='container' style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', overflowX: 'auto', width: '100%', scrollbarWidth: 'none' }} ref={containerRef}>
                <button 
                    className="scroll-button scroll-button-left" 
                    onClick={() => handleScroll(-50)} 
                    style={scrollButtonStyle}
                >
                    ←
                </button>
                    {dailyExercises.map((item, index) => (
                        item.exerciseDto.targetMuscle ? (
                            <DailyExerciseComponent 
                                key={index} 
                                id={item.exerciseDto.id} 
                                name={item.exerciseDto.name} 
                                image={item.exerciseDto.imageUrl} 
                                targetMuscle={item.exerciseDto.targetMuscle} 
                                instructions={item.exerciseDto.instructions}
                            />
                        ) : (
                            <div key={index}>
                                This is a recipe
                                {console.log(item)}
                            </div>   
                        )
                    ))}
                    <button 
                    className="scroll-button scroll-button-right" 
                    onClick={() => handleScroll(150)} 
                    style={scrollButtonStyle}
                >
                    →
                </button>
                </div>
            </div>
        ) : (<div>lul</div>)
    );
}

const scrollButtonStyle = {
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px', 
    height: '40px', 
    backgroundColor: '#ccc',
    border: 'none',
    cursor: 'pointer',
    opacity: '0.7',
    padding: '2px'
};

export default ScrollbarComponent;
