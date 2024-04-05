import React from 'react';
import { useState } from 'react';
import ExerciseService from '../../service/ExerciseService';
import { useUser } from '../../provider/UserProvider';
import Calendar from 'react-calendar';

function ExerciseComponent({ id, name, image, targetMuscle, equipment, instructions, secondaryMuscles }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const { loggedInUser } = useUser();

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
        console.log(loggedInUser)
        console.log(ExerciseService.postDailyExercise({"dailySummaryDto":{"username": loggedInUser, "date": date}, "exerciseDto":{"id": id, "name": name, "targetMuscle": targetMuscle}}))
    }

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function formatDate(string){
        return string.toISOString().slice(0, -14)
    }

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
                                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Fermer</button>
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
                                <Calendar onChange={setDate} value={date} className="bg-secondary text-light p-3" defaultView='month' maxDate={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)} minDate={new Date(new Date().setHours(0, 0, 0, 0))} showNavigation={false}/>
                                <p className="mt-3 text-secondary">Date choisie: {formatDate(date)}</p>
                                <button onClick={() => createDailyExercise(formatDate(date))} className="btn btn-success btn-sm border border-dark border-2">Confirmer l'ajout</button>
                                <p class="mt-3 mb-0 text-success">*Si un plan n'existe pas pour la journée choisie, il sera créé</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={toggleAddModal}>Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExerciseComponent;
