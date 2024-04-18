import React, { useRef, useState } from 'react';
import DailyExerciseComponent from '../dailysummary/DailyExerciseComponent';


function ScrollbarComponent({ data }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();

    return (
        <div className='container'>
            <div ref={containerRef}>
                <div className='content-box'>
                    {data.map((item, index) => (
                        <DailyExerciseComponent />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ScrollbarComponent;