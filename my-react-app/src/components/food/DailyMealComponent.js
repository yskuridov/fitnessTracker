import React, { useState } from 'react';

function DailyMealComponent({ id, name, image, ingredients, nutrients, servingWeight, instructions, summaryDate }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('ingredients');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    const deleteComponent = () => {
        
        console.log(`Deleted component with id ${id}`);
    };

    return (
        <div className='col-sm-8 col-md-6 col-lg-4 mb-4 m-1 shadow-lg'>
            <div className="card h-100 border border-success border-3 ">
                <img
                    className="w-100 h-100"
                    alt="Product image"
                    style={{ cursor: 'pointer' }}
                    src={image}
                    onClick={toggleModal}
                />
                <div className="card-body mb-0 card-body bg-dark border-success border-top border-2">
                    <h6 className="card-title text-light text-center my-auto">{name}</h6>
                </div>
                <div className='card-footer bg-dark'>
                    <button className="bg-dark w-100 rounded border border-danger text-secondary p-1 px-2 fw-bold" onClick={deleteComponent}>
                        Supprimer
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block'}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'ingredients' ? 'active' : ''}`} onClick={() => toggleTab('ingredients')}>Ingrédients</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'nutrients' ? 'active' : ''}`} onClick={() => toggleTab('nutrients')}>Nutriments</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className={`nav-link ${activeTab === 'instructions' ? 'active' : ''}`} onClick={() => toggleTab('instructions')}>Instructions de cuisson</button>
                                    </li>
                                </ul>
                                <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body text-dark">
                                {activeTab === 'ingredients' && (
                                    <div>
                                        <h5 className="modal-title mb-4">{name}</h5>
                                        <ul className="list-unstyled text-start">
                                            {ingredients.map((ingredient, index) => (
                                                <li key={index} className="m-3">- {ingredient}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 'instructions' && (
                                    <div>
                                        <h5 className="modal-title mb-4">{name}</h5>
                                        <ol>
                                            {instructions.map((instruction, index) => (
                                                <li key={index} className="m-3 text-start">{`${instruction}`}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                                {activeTab === 'nutrients' && (
                                    <div>
                                        <h6 className="text-success">Portion: {servingWeight.toFixed(2)} g</h6>
                                        <ul className="list-unstyled text-start">
                                            <li className="m-3">Calories: {nutrients.calories} kcal / portion</li>
                                            <li className="m-3">Glucides: {nutrients.carbs} g / portion</li>
                                            <li className='m-3'>Protéines: {nutrients.protein} g / portion</li>
                                            <li className='m-3'>Gras: {nutrients.fat} g / portion</li>
                                            <li className='m-3'>Fibres: {nutrients.fiber} g / portion</li>
                                            <li className='m-3'>Calcium: {nutrients.calcium} mg / portion</li>
                                            <li className='m-3'>Fer: {nutrients.iron} mg / portion</li>
                                            <li className='m-3'>Sodium: {nutrients.sodium} mg / portion</li>
                                            <li className='m-3'>Cholésterol: {nutrients.cholesterol} mg / portion</li>
                                        </ul>
                                    </div>
                                )}
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

export default DailyMealComponent;
