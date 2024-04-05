import axios from "axios";

class FoodService {

    async getFoodByName(name) {
        const options = {
            method: 'GET',
            url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
            params: { ingr: name },
            headers: {
                'X-RapidAPI-Key': 'a8a8b23bcbmsh3b1927f529dc77ep18a3edjsn0798847578bf',
                'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data.parsed;
        } catch (error) {
            console.error(error);
        }
    }


}

export default new FoodService();