import React, { useState } from 'react';
import { useUser } from '../../provider/UserProvider';
import FoodService from '../../service/FoodService';

function DailyMealComponent({ id, name, image, ingredients, nutrients, servingWeight, instructions, summaryDate, handleDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('ingredients');
    const { loggedInUser } = useUser();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    const deleteComponent = () => {
        const dto = {"dailySummaryDto": {"username": loggedInUser.username, "date": summaryDate}, "mealDto": {"id": 1, "name": name, "instructions": instructions, "ingredients": ingredients.map(ingredient => ingredient.name), "image": image, "calories": nutrients.calories, "servingPortion": servingWeight, "protein": nutrients.protein, "carbs": nutrients.carbs, "fat": nutrients.fat, "fiber": nutrients.fiber, "calcium": nutrients.calcium, "sodium": nutrients.sodium, "cholesterol": nutrients.cholesterol, 'sugar': nutrients.sugar, 'transFat': nutrients.transFat}}
        FoodService.deleteDailyMeal(dto);
        handleDelete(dto);
    };

    return (
        <div className='col-sm-8 col-md-5 col-lg-5 mb-4 m-1 shadow-lg'>
            <div className="card h-100 border border-success border-4">
                <img
                    width={200}
                    height={150}
                    className='card-img-top m-auto'
                    alt="Product image"
                    style={{ cursor: 'pointer' }}
                    src={image}
                    onClick={toggleModal}
                />
                <div className="card-body mb-0 card-body bg-dark border-success border-top border-2">
                    <h6 className="card-title text-light text-center my-auto">{name}</h6>
                </div>
                <div className='card-footer bg-dark'>
                    <button className="bg-dark w-100 p-1 rounded border border-danger text-secondary px-2 fw-bold text-danger" onClick={deleteComponent}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
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
