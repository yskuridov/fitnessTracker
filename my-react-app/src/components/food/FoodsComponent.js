import React, { useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import FoodService from '../../service/FoodService';
import FoodComponent from './FoodComponent';

function FoodsComponent() {
    const [text, setText] = useState('');
    const [searchWasMade, setSearchWasMade] = useState(false)
    const [results, setResults] = useState(null)


    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResults(await FoodService.getFoodByName(text))
        console.log(results)
        setSearchWasMade(true)
        setText('')
    };

    return (
        <div className="row">
            <Form className="col-10 m-auto p-3 border border-dark bg-dark text-light" onSubmit={handleSubmit}>
                <h3 className='m-3 mb-5'>Recherche de produits</h3>
                <input
                    className="col-12 mt-4 border border-3 border-success rounded"
                    size="sm"
                    placeholder="Nom du produit"
                    value={text}
                    onChange={handleTextChange}
                    required
                />
                <Button className="mt-3 btn-sm  bg-success border border-dark" type="submit">Rechercher</Button>
            </Form>
            {searchWasMade && (
                <div className="mt-5 col-10 container-fluid">
                    <h3 className='text-success text-start'>Résultats</h3>
                    <div className="row justify-content-around">
                        {results.map((result) => (
                            <FoodComponent
                                key={result.food.foodId}
                                id={result.food.foodId}
                                name={result.food.label}
                                category={result.food.category}
                                nutrients={result.food.nutrients}
                                image={result.food.image}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>    
    );
}

export default FoodsComponent;
