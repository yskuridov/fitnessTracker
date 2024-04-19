import axios from "axios";

const POST_DAILY_MEAL = "http://localhost:8081/dailyMeal";
class FoodService {


    async getFoodByName(name) {
        const query = `query{
            searchRecipeByNameOrIngredient(query: "${name}"){
                onPlan{
                    id,
                    name,
                    mainImage,
                    ingredients{
                        name
                    },
                    nutrientsPerServing{
                        calories,
                        calcium,
                        sodium,
                        protein,
                        fat,
                        carbs,
                        cholesterol,
                        iron,
                        fiber
                    },
                    servingWeight,
                }
            }
        }`
        const options = {
            method: 'POST',
            url: 'https://production.suggestic.com/graphql',
            headers: {
                'sg-user': '99d8c770-7570-4f26-a3a5-53818c81533d',
                'Authorization': 'Token c366c044b4f60b298cc002d92115a964c9dea255'
            },
            data: {
                query: query
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data.data.searchRecipeByNameOrIngredient.onPlan;
        } catch (error) {
            console.error(error);
        }
    }

    async getDailyMealsByDateAndUsername(username, date){
        return await axios.get("http://localhost:8081/dailyMeal/" + username, {params: {date: date}}).then((response) => {return response.data});
    }

    async postDailyMeal(dailyMeal) {
        console.log(dailyMeal)
        return await axios.post(POST_DAILY_MEAL, dailyMeal).then((response) => { return response.data });
    }


}

export default new FoodService();