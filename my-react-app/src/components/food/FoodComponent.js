import React from 'react';
import { useState, useEffect } from 'react';
import { useUser } from '../../provider/UserProvider';
import Calendar from 'react-calendar';
import FoodService from '../../service/FoodService';

function FoodComponent({ id, name, image}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [fetchData, setFetchData] = useState(null);
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


    const fetchNutrientData = async (productName) => {
        try {
            console.log("FETCHING FOOD DATA")
            const data = await FoodService.getNutrientsByFoodName(productName);
            setFetchData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    function formatDate(string){
        return string.toISOString().slice(0, -14)
    }


    return (
        <div className='col-4 p-3'>
            {fetchData != null && (
            <div className="card mb-2 p-2">
                <img
                    src={image}
                    className="card-img mx-auto my-auto"
                    alt="Product image"
                    style={{ height: '150px', width: '130px' }}
                    onClick={toggleModal}
                />
                <div class="card-body">
                    <h6 class="card-title text-success">{capitalizeFirstLetter(name)}</h6>
                </div>
                <ul class="list-group list-group-flush bg-secondary text-start">
                    <li class="list-group-item">Portion servie (g): </li>
                    <li class="list-group-item">Calories par portion: </li>
                </ul>
                <div class="card-body">
                    <button onClick={onAddBtnClick} className="btn btn-success btn-sm border border-dark border-2">
                        Ajouter au plan du jour
                    </button>
                </div>
            </div>)}
            {isModalOpen && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(222, 222, 222, 0.8)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-success mx-auto">Données nutritionnelles</h5>
                            </div>
                            <div className="modal-body">
                                <h5 className="modal-title">{capitalizeFirstLetter(name)}</h5>
                                <ol>
                                    
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
                                <button type="button" className="btn btn-success btn-sm border border-dark border-2">Confirmer l'ajout</button>
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
