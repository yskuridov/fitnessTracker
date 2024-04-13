import React from 'react';


function DailyExerciseComponent({ id, name, image, targetMuscle, equipment, instructions, secondaryMuscles }) {
    return (
        <div className='col-4 p-3'>
            <div className="card mb-2 p-2">
                <img
                    src={image}
                    className="card-img m-auto"
                    alt="Product image"
                    style={{ height: '150px', width: '150px' }}
                    onClick={toggleModal}
                />
                <div class="card-body">
                    <h6 class="card-title text-success">{capitalizeFirstLetter(name)}</h6>
                </div>
                <ul class="list-group list-group-flush bg-secondary text-start">
                    <li class="list-group-item">Muscle ciblé: {targetMuscle}</li>
                    <li class="list-group-item">Muscle secondaire: {secondaryMuscles[0] + ", " + secondaryMuscles[1]}</li>
                    <li class="list-group-item">Équipement: {equipment}</li>
                </ul>
            </div>
        </div>
    );
}

export default ExerciseComponent;
