import React, { useState } from 'react';
import ExerciseService from '../../service/ExerciseService';
import { useUser } from '../../provider/UserProvider';

function DailyExerciseComponent({ id, name, image, targetMuscle, equipment, instructions, secondaryMuscles, summaryDate, handleDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { loggedInUser } = useUser();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    function capitalizeFirstLetter(string) {
        if (string === undefined) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const deleteComponent = () => {
        const dto = {"dailySummaryDto": {"username": loggedInUser.username, "date": summaryDate}, "exerciseDto": { "id": id, "name": name, "targetMuscle": targetMuscle, "imageUrl": image, "instructions": instructions }}
        ExerciseService.deleteDailyExercise(dto);
        handleDelete(dto);
    };


    return (
        <div className='col-sm-8 col-md-5 col-lg-5 mb-4 m-1 shadow-lg'>
            <div className="card h-100 border border-success border-4">
                <img
                    src={image}
                    className="card-img-top m-auto p-1"
                    alt="Product image"
                    style={{ height: '150px', width: '150px', cursor: 'pointer' }}
                    onClick={toggleModal}
                />
                <div className="card-body bg-dark border-success border-top border-2">
                    <h6 className="card-title text-light text-center my-auto">{capitalizeFirstLetter(name)}</h6>
                </div>
                <div className='card-footer bg-dark'>
                    <button className="bg-dark w-100 rounded border border-danger text-secondary p-1 px-2 fw-bold" onClick={deleteComponent}>
                        Supprimer
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
                                <img
                                    src={image}
                                    className="card-img m-auto border border-dark border-2 p-3"
                                    alt="Product image"
                                    style={{ height: '150px', width: '150px' }}
                                />
                                <h4 className="modal-title mt-3 mb-2 text-dark">{capitalizeFirstLetter(name)}</h4>
                                <ol>
                                    {instructions.map((instruction, index) => (
                                        <li className="m-3 text-start text-dark" key={index}>{`${instruction}`}</li>
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
        </div>
    );
}

export default DailyExerciseComponent;
