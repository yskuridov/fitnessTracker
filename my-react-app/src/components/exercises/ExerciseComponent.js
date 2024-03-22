import React from 'react';

function ExerciseComponent({ name, image, targetMuscle, equipment }) {

    const addToDailySummary = () => {
        
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    


    return (
        <div className='col-4'>
            <div className="card mb-2 p-2">
                <img src={image} className="card-img m-auto" alt="Product image" style={{ height: '150px', width: '150px' }} />
                <div class="card-body">
                    <h6 class="card-title text-success">{capitalizeFirstLetter(name)}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Muscle ciblé: {capitalizeFirstLetter(targetMuscle)}</li>
                    <li class="list-group-item">Équipement: {capitalizeFirstLetter(equipment)}</li>
                </ul>
                <div class="card-body">
                    <button onClick={addToDailySummary} className="btn btn-success btn-sm">
                        Ajouter au plan du jour
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ExerciseComponent;
