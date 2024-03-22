import React from 'react';
import { useState } from 'react';
import ExerciseService from '../../service/ExerciseService';
import { useUser } from '../../provider/UserProvider';

function ExerciseComponent({ name, image, targetMuscle, equipment, instructions }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const { loggedInUser, setLoggedInUser } = useUser();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleAddModal = () => {
        setIsAddModalOpen(!isAddModalOpen)
    }

    const onAddBtnClick = () => {
        toggleAddModal();
    };

    const createDailyExercise = (date) => {
        console.log(date)
        console.log("CREATED")
        console.log(ExerciseService.postDailyExercise({"dailySummaryDto":{"username": "yegor124", "date": date}, "exerciseDto":{"id": 1, "name": name, "targetMuscle": targetMuscle}}))
    }


    function capitalizeFirstLetter(string) {
        console.log(loggedInUser)
        return string.charAt(0).toUpperCase() + string.slice(1);
        
    }

    const getNextSevenDays = () => {
        const today = new Date();
        const days = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            days.push(date);
        }

        return days;
    };



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
                    <button onClick={onAddBtnClick} className="btn btn-success btn-sm border border-dark border-2">
                        Ajouter au plan du jour
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
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
            {isAddModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-success mx-auto">Ajouter un exercice au journal</h5>
                            </div>
                            <div className="modal-body">
                                <p>Veuillez choisir la journée à laquelle vous voulez ajouter cet exercice</p>
                                {getNextSevenDays().map((date, index) => (
                                    <a onClick={() => createDailyExercise(date.toISOString().slice(0, -3))} className="mt-1" key={index} href="#" style={{ display: 'block', marginBottom: '5px' }}>{date.toLocaleDateString()}</a>
                                ))}
                                <p class="mt-3 text-success">*Si un plan n'existe pas pour la journée choisie, il sera créé</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={toggleAddModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExerciseComponent;
