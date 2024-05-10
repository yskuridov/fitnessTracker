import React, { useEffect } from 'react';
import './NutritionStyles.css'
import { useUser } from '../../provider/UserProvider';

function NutritionGoalComponent() {
    const { nutritionData } = useUser();
    console.log(nutritionData.macronutrients_table['macronutrients-table']["4"]["1"])

    function extractNumberValue(string){
        return string.replace(/[^0-9-]/g, '');
    }

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
                            <span>{extractNumberValue(nutritionData.BMI_EER['Estimated Daily Caloric Needs'])}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="daily-value">
                        <th colspan="4">
                        </th>
                    </tr>
                    <tr id="TotFat" className="br">
                        <th colspan="3">
                            <strong>Gras Total:  </strong>
                             {extractNumberValue(nutritionData.macronutrients_table['macronutrients-table']["4"]["1"])} g
                        </th>
                    </tr>
                    <td>&nbsp;</td>
                    <th colspan="2">
                        Gras trans:
                        <span className='text-danger'> À éviter</span></th>
                    <tr>
                        <th colspan="3">
                            <strong text-danger>Cholestérol: </strong>
                             <span className='text-danger'> À éviter</span>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <strong>Sodium:  </strong>
                            {extractNumberValue(nutritionData.minerals_table['essential-minerals-table']["14"]["1"])} mg
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <strong>Sucres: </strong>
                            <span className='text-danger'> À éviter</span>
                        </th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <strong>Glucides:  </strong>
                            {extractNumberValue(nutritionData.macronutrients_table['macronutrients-table'][1][1])} g
                        </th>
                    </tr>
                    <tr id="fiber">
                        <td>&nbsp;</td>
                        <th colspan="2">
                            Fibres:
                            <span> {extractNumberValue(nutritionData.macronutrients_table['macronutrients-table'][2][1])}  g </span></th>
                    </tr>
                    <tr>
                        <th colspan="3">
                            <strong>Protéines: </strong>
                            {extractNumberValue(nutritionData.macronutrients_table['macronutrients-table'][3][1])} g
                        </th>
                    </tr>
                </tbody>
            </table>
            <table className="voluntary-nutrients">
                <tbody>
                    <tr id="calcium">
                        <th className="label">
                            Calcium: {extractNumberValue(nutritionData.minerals_table['essential-minerals-table'][1][1])} g</th>
                    </tr>
                    <tr id="iron">
                        <th className="label">
                            Fer: {extractNumberValue(nutritionData.minerals_table['essential-minerals-table'][7][1])} mg
                        </th>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default NutritionGoalComponent;