import React, { useState } from "react";

const NutritionComponent = () => {
    const [userRequirements, setUserRequirements] = useState({
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0
    });
    const [loggedData, setLoggedData] = useState([]);

    // Function to handle input change for user requirements
    const handleRequirementChange = (event) => {
        const { name, value } = event.target;
        setUserRequirements({
            ...userRequirements,
            [name]: value
        });
    };

    // Function to log data
    const logData = () => {
        setLoggedData([...loggedData, userRequirements]);
        // You might want to do additional processing here, e.g., reset user requirements after logging
        setUserRequirements({
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0
        });
    };

    return (
        <div>
            <h2>User Requirements</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Calories:</td>
                        <td><input type="number" name="calories" value={userRequirements.calories} onChange={handleRequirementChange} /></td>
                    </tr>
                    <tr>
                        <td>Protein:</td>
                        <td><input type="number" name="protein" value={userRequirements.protein} onChange={handleRequirementChange} /></td>
                    </tr>
                    <tr>
                        <td>Carbs:</td>
                        <td><input type="number" name="carbs" value={userRequirements.carbs} onChange={handleRequirementChange} /></td>
                    </tr>
                    <tr>
                        <td>Fats:</td>
                        <td><input type="number" name="fats" value={userRequirements.fats} onChange={handleRequirementChange} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={logData}>Log Data</button>

            <h2>Logged Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Calories</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Fats</th>
                    </tr>
                </thead>
                <tbody>
                    {loggedData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.calories}</td>
                            <td>{data.protein}</td>
                            <td>{data.carbs}</td>
                            <td>{data.fats}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NutritionComponent;
