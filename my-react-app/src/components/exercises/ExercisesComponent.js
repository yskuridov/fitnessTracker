import React, { useState, useEffect } from 'react';
import { Form, Button, FormSelect } from 'react-bootstrap';
import ExerciseService from '../../service/ExerciseService';
import ExerciseComponent from './ExerciseComponent';

function ExercisesComponent() {
    const [selected, setSelected] = useState('');
    const [text, setText] = useState('');
    const [searchWasMade, setSearchWasMade] = useState(false)
    const [exercises, setExercises] = useState(null)

    const options = [
        { value: 'name', label: 'Rechercher par nom' },
        { value: 'targetMuscle', label: 'Rechercher par muscle ciblé' },
    ];

    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selected === "name") setExercises(await ExerciseService.searchExercisesByName(text))
        else setExercises(await ExerciseService.searchExercisesByMuscleGroup(text))
        setSearchWasMade(true)
        setText('')
    };

    return (
        <div className="row">
            <Form className="col-10 m-auto p-3 border border-dark bg-dark text-light" onSubmit={handleSubmit}>
                <h4>Recherche d'exercices</h4>
                <FormSelect
                    size="sm"
                    id="type"
                    value={selected}
                    onChange={handleSelectChange}
                    required
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </FormSelect>
                <input
                    className="col-12 mt-4 border border-3 border-success rounded"
                    size="sm"
                    placeholder="Spécifiez..."
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
                        {exercises.map((exercise) => (
                            <ExerciseComponent
                                key={exercise.id}
                                id={exercise.id}
                                name={exercise.name}
                                image={exercise.gifUrl}
                                targetMuscle={exercise.bodyPart}
                                equipment={exercise.equipment}
                                instructions={exercise.instructions}
                                secondaryMuscles={exercise.secondaryMuscles}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>    
    );
}

export default ExercisesComponent;
