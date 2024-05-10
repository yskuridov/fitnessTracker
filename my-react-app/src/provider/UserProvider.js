import React, { createContext, useContext, useEffect, useState } from 'react';
import FoodService from '../service/FoodService';
import UserService from '../service/UserService';

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [nutritionData, setNutritionData] = useState([]);

    useEffect(() => {
        async function getNutritionData() {
            if(loggedInUser) setNutritionData(await UserService.getNutritionData(loggedInUser));
        }
        getNutritionData();
    }
    , [loggedInUser]);

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, nutritionData }}>
            {children}
        </UserContext.Provider>
    );
}