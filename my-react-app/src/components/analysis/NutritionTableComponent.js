import React from 'react';
import './NutritionStyles.css'

function NutritionTableComponent() {
    return (
        <section className="nutrition-facts">
          <header>
            <h1>Nutrition Facts</h1>
            <p>
              <input type="text" /> servings per meal
            </p>
            <p>
              <strong>
                Serving Size<span><input type="text" /></span>
              </strong>
            </p>
          </header>
          <table className="main-nutrients">
            <thead>
              <tr>
                <th colspan="4">
                  Amount per serving
                  <br />
                  <strong>Calories</strong>
                  <span><input className="cals" type="text" /></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="daily-value">
                <th colspan="4">
                  <strong>% Daily Value*</strong>
                </th>
              </tr>
              <tr id="TotFat" className="br">
                <th colspan="3">
                  <strong>Total Fat </strong>
                  <input type="text" />g
                </th>
                <td><input type="text" />%</td>
              </tr>
              <tr id="SatFat">
                <td></td>
                <th colspan="2">Saturated Fat
                  <input type="text" />g</th>
                <td><input type="text" />%</td>
              </tr>
              <tr id="TransFat">
                <td>&nbsp;</td>
                <th colspan="2">
                  <em>Trans</em> Fat
                  <input type="text" />g
                </th>
                <td></td>
              </tr>
              <tr>
                <th colspan="3">
                  <strong>Cholesterol</strong>
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
                  <strong>Total Carbohydrate</strong>
                  <input type="text" />g
                </th>
                <td><input type="text" />%
                </td>
              </tr>
              <tr id="fiber">
                <td>&nbsp;</td>
                <th colspan="2">
                  Dietary Fiber
                  <input type="text" />g</th>
                <td><input type="text" />%</td>
              </tr>
              <tr id="sugars">
                <td>&nbsp;</td>
                <th colspan="2">
                  Total Sugars
                  <input type="text" />g</th>
                <td></td>
              </tr>
              <tr>
                <td className="indent">&nbsp;</td>
                <td className="indent">&nbsp;</td>
                <th>
                  Includes <input type="text" />g Added Sugars
                </th>
                <td>
                  <input type="text" />%
                </td>
              </tr>
              <tr>
                <th colspan="3">
                  <strong>Protein</strong>
                  <input type="text" />g
                </th>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="voluntary-nutrients">
            <tbody>
              <tr id="vitD">
                <th>
                  Vitamin D <input type="text" />mcg
                </th>
                <td>
                  <input type="text" />%
                </td>
              </tr>
              <tr id="calcium">
                <th className="label">
                  Calcium <input type="text" />g</th>
                <td className="dv"><input type="text" />%
                </td>
              </tr>
              <tr id="iron">
                <th className="label">
                  Iron <input type="text" />mg
                </th>
                <td>
                  <input type="text" />%
                </td>
              </tr>
              <tr id="potasssium">
                <th>Potassium <input type="text" />mg
                </th>
                <td>
                  <input type="text" />%
                </td>
              </tr>
              <tr id="vitC">
                <th>
                  Vitamin C <input type="text" />mg
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