import React, { useState } from 'react';

function DailyExerciseComponent({ id, name, image, targetMuscle, equipment, instructions, secondaryMuscles }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    function capitalizeFirstLetter(string) {
        if(string === undefined) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 mb-4 m-1'>
            <div className="card h-100">
                <img
                    src={image}
                    className="card-img-top m-auto"
                    alt="Product image"
                    style={{ height: '130px', width: '130px', cursor: 'pointer' }}
                    onClick={toggleModal}
                />
                <div className="card-body">
                    <h6 className="card-title text-success mb-0 mt-4 text-center">{capitalizeFirstLetter(name)}</h6>
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
