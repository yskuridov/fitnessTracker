import axios from "axios";

class FoodService {

    async getNutrientsByFoodName(name) {
        var options = {
            'method': 'POST',
            'url': 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            'headers': {
                'Content-Type': 'application/json',
                'x-app-id': 'fb03788f',
                'x-app-key': 'b442d8f0b4a8e1dc727704a5750925bf'
            },
            data: {
                query: name
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export default new FoodService();