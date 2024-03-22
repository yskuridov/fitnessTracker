import React from 'react';
import { useState } from 'react';

function ExerciseComponent({ name, image, targetMuscle, equipment, instructions }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleAddModal = () => {
        setIsAddModalOpen(!isAddModalOpen)

    }

    const addToDailySummary = () => {
        toggleAddModal();
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    return (
        <div className='col-4'>
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
                    <li class="list-group-item">Muscle ciblé: {capitalizeFirstLetter(targetMuscle)}</li>
                    <li class="list-group-item">Équipement: {capitalizeFirstLetter(equipment)}</li>
                </ul>
                <div class="card-body">
                    <button onClick={addToDailySummary} className="btn btn-success btn-sm border border-dark border-2">
                        Ajouter au plan du jour
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-success mx-auto">Instructions</h5>
                            </div>
                            <div className="modal-body">
                                <h5 className="modal-title">{capitalizeFirstLetter(name)}</h5>
                                <ol>
                                    {instructions.map((instruction, index) => (
                                        <li className="m-3 text-start" key={index}>{`${instruction}`}</li>
                                    ))}
                                </ol>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExerciseComponent;
