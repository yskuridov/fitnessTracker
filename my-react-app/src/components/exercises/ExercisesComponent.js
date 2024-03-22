import React, { useState } from 'react';
import { Form, Button, FormSelect } from 'react-bootstrap';
import ExerciseService from '../../service/ExerciseService';

function ExercisesComponent() {
    const [selected, setSelected] = useState('');
    const [text, setText] = useState('');

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
    const handleSubmit = (event) => {
        event.preventDefault();
        if (selected === "name") ExerciseService.searchExercisesByName(text)
        else ExerciseService.searchExercisesByMuscleGroup(text)
    };

    return (
        <Form className="col-6 m-auto p-3 border border-dark bg-dark text-light" onSubmit={handleSubmit}>
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
    );
}

export default ExercisesComponent;
