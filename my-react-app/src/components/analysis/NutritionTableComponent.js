import React, { useEffect } from 'react';
import './NutritionStyles.css'

function NutritionTableComponent({ meals, exercises }) {

  useEffect(() => {
    console.log(meals);
    console.log(exercises);
  }, [meals, exercises]);

  
  const totalCalories = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.calories.toFixed(0));
  }, 0);

  const totalFat = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.fat.toFixed(0));
  }, 0);

  const totalCholesterol = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.cholesterol.toFixed(0));
  }, 0);

  const totalSodium = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.sodium.toFixed(0));
  }, 0);

  const totalCarbs = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.carbs.toFixed(0));
  }, 0);

  const totalFiber = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.fiber.toFixed(0));
  }, 0);

  const totalProtein = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.protein.toFixed(0));
  }, 0);

  const totalCalcium = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.calcium.toFixed(0));
  }, 0);

  const totalIron = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.iron.toFixed(0));
  }, 0);

  const totalSugar = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.sugar.toFixed(0));
  }, 0);

  const totalTransFat = meals.reduce((total, meal) => {
    return total + parseFloat(meal.mealDto.transFat.toFixed(0));
  }, 0);


  return (
    <section className="nutrition-facts">
      <header>
        <h1>Faits nutritionnels de la journée</h1>
      </header>
      <table className="main-nutrients">
        <thead>
          <tr>
            <th colspan="4">
              <br />
              <strong>Calories</strong>
              <span>{totalCalories}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="daily-value">
            <th colspan="4">
              <strong>% Valeur quotidienne*</strong>
            </th>
          </tr>
          <tr id="TotFat" className="br">
            <th colspan="3">
              <strong>Gras Total:  </strong>
              {totalFat} g
            </th>
            <td><input type="text" />%</td>
          </tr>
          <td>&nbsp;</td>
            <th colspan="2">
              Gras trans:  
              <span> {totalTransFat} g </span></th>
          <tr>
            <th colspan="3">
              <strong>Cholestérol: </strong>
              {totalCholesterol} mg
            </th>
            <td>
              <input type="text" />%
            </td>
          </tr>
          <tr>
            <th colspan="3">
              <strong>Sodium:  </strong>
              {totalSodium} mg
            </th>
            <td>
              <input type="text" />%
            </td>
          </tr>
          <tr>
            <th colspan="3">
              <strong>Sucres:  </strong>
              {totalSugar} g
            </th>
            <td>
              <input type="text" />%
            </td>
          </tr>
          <tr>
            <th colspan="3">
              <strong>Glucides:  </strong>
              {totalCarbs} g
            </th>
            <td><input type="text" />%
            </td>
          </tr>
          <tr id="fiber">
            <td>&nbsp;</td>
            <th colspan="2">
              Fibres:  
              <span> {totalFiber} g </span></th>
            <td><input type="text" />%</td>
          </tr>
          <tr>
            <th colspan="3">
              <strong>Protéines: </strong>
              {totalProtein} g
            </th>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="voluntary-nutrients">
        <tbody>
          <tr id="calcium">
            <th className="label">
              Calcium: {totalCalcium} g</th>
            <td className="dv"><input type="text" />%
            </td>
          </tr>
          <tr id="iron">
            <th className="label">
              Fer: {totalIron} mg
            </th>
            <td>
              <input type="text" />%
            </td>
          </tr>
        </tbody>
      </table>
      <p className="footnote">
        The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
      </p>
    </section>
  );
}

export default NutritionTableComponent;