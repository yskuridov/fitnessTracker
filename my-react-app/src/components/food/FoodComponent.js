import React, { useState } from 'react';
import { useUser } from '../../provider/UserProvider';
import Calendar from 'react-calendar';
import FoodService from '../../service/FoodService';

function FoodComponent({ id, name, image, ingredients, nutrients, servingWeight, instructions }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('ingredients');
    const [date, setDate] = useState(new Date());
    const { loggedInUser } = useUser();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleAddModal = () => {
        setIsAddModalOpen(!isAddModalOpen)
    }

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };

    const onAddBtnClick = () => {
        toggleAddModal();
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function formatDate(string) {
        return string.toISOString().slice(0, -14);
    }

    const createDailyMeal = (date) => {
        console.log(FoodService.postDailyMeal({ "dailySummaryDto": { "username": loggedInUser.username, "date": date }, "mealDto": {"id": 1, "name": name, "instructions": instructions, "ingredients": ingredients.map(ingredient => ingredient.name), "image": image, "calories": nutrients.calories, "servingPortion": servingWeight, "protein": nutrients.protein, "carbs": nutrients.carbs, "fat": nutrients.fat, "fiber": nutrients.fiber, "calcium": nutrients.calcium, "sodium": nutrients.sodium, "cholesterol": nutrients.cholesterol, 'sugar': nutrients.sugar, 'transFat': nutrients.transFat} }))
    }

    return (
        <div className='col-3 p-2'>
            <div className="card h-100">
                <img
                    src={image}
                    className="card-img-top"
                    alt="Product image"
                    onClick={toggleModal}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body mt-4 mb-0">
                    <h6 className="card-title text-success">{capitalizeFirstLetter(name)}</h6>
                </div>
                <div className="card-body mt-0">
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
                            <div className="modal-body">
                                {activeTab === 'ingredients' && (
                                    <div>
                                        <h5 className="modal-title mb-4">{capitalizeFirstLetter(name)}</h5>
                                        <ul className="list-unstyled text-start">
                                            {ingredients.map((ingredient, index) => (
                                                <li key={index} className="m-3">- {ingredient.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 'instructions' && (
                                    <div>
                                        <h5 className="modal-title mb-4">{capitalizeFirstLetter(name)}</h5>
                                        <ol>
                                            {instructions.map((instruction, index) => (
                                                <li key={index} className="m-3 text-start">{`${instruction}`}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                                {activeTab === 'nutrients' && (
                                    <div>
                                        <h6 className="text-success">Portion: {servingWeight.toFixed(0)} g</h6>
                                        <ul className="list-unstyled text-start">
                                            <li className="m-3">Calories: {nutrients.calories.toFixed(0)} kcal / portion</li>
                                            <li className="m-3">Glucides: {nutrients.carbs.toFixed(0)} g / portion</li>
                                            <li className='m-3'>Protéines: {nutrients.protein.toFixed(0)} g / portion</li>
                                            <li className='m-3'>Gras: {nutrients.fat.toFixed(0)} g / portion</li>
                                            <li className='m-3'>Fibres: {nutrients.fiber.toFixed(0)} g / portion</li>
                                            <li className='m-3'>Calcium: {nutrients.calcium.toFixed(0)} mg / portion</li>
                                            <li className='m-3'>Fer: {nutrients.iron.toFixed(0)} mg / portion</li>
                                            <li className='m-3'>Sodium: {nutrients.sodium.toFixed(0)} mg / portion</li>
                                            <li className='m-3'>Cholésterol: {nutrients.cholesterol.toFixed(0)} mg / portion</li>
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
              {isAddModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-success mx-auto">Ajouter un produit au journal</h5>
                            </div>
                            <div className="modal-body">
                                <p>Veuillez choisir la journée à laquelle vous voulez ajouter ce produit</p>
                                <Calendar onChange={setDate} value={date} className="bg-secondary text-light p-3" defaultView='month' maxDate={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)} minDate={new Date(new Date().setHours(0, 0, 0, 0))} showNavigation={false} />
                                <p className="mt-3 text-secondary">Date choisie: {formatDate(date)}</p>
                                <button type="button" onClick={() => createDailyMeal(formatDate(date))} className="btn btn-success btn-sm border border-dark border-2">Confirmer l'ajout</button>
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

export default FoodComponent;
