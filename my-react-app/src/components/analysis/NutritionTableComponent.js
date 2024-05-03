import React from 'react';
import './NutritionStyles.css'

function NutritionTableComponent({meals, nbExercises}) {
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
                  <span><input className="cals" type="text" /></span>
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
                  <strong>Gras Total </strong>
                  <input type="text" />g
                </th>
                <td><input type="text" />%</td>
              </tr>
              <tr>
                <th colspan="3">
                  <strong>Cholestérol</strong>
                  <input type="text" />mg
                </th>
                <td>
                  <input type="text" />%
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <strong>Sodium</strong>
                  <input type="text" />mg
                </th>
                <td>
                  <input type="text" />%
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <strong>Glucides</strong>
                  <input type="text" />g
                </th>
                <td><input type="text" />%
                </td>
              </tr>
              <tr id="fiber">
                <td>&nbsp;</td>
                <th colspan="2">
                  Fibres
                  <input type="text" />g</th>
                <td><input type="text" />%</td>
              </tr>
              <tr>
                <th colspan="3">
                  <strong>Protéines</strong>
                  <input type="text" />g
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
                  Calcium <input type="text" />g</th>
                <td className="dv"><input type="text" />%
                </td>
              </tr>
              <tr id="iron">
                <th className="label">
                  Fer <input type="text" />mg
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