import axios from "axios";

const POST_LOGIN = "http://localhost:8081/login";
const POST_REGISTER = "http://localhost:8081/user";

class UserService{
    async login(loginDto){
        return await axios.post(POST_LOGIN, loginDto).then((response) => {return response.data});
    }

    async register(userDto){
        console.log(userDto)
        return await axios.post(POST_REGISTER, userDto).then((response) => {return response.data});
    }

    async getNutritionData(user){
        const options = {
            method: 'GET',
            url: 'https://nutrition-calculator.p.rapidapi.com/api/nutrition-info',
            params: {
              measurement_units: 'met',
              sex: "male",
              age_value: user.age,
              age_type: 'yrs',
              cm: user.height,
              kilos: user.weight,
              activity_level: 'Active'
            },
            headers: {
              'X-RapidAPI-Key': 'a8a8b23bcbmsh3b1927f529dc77ep18a3edjsn0798847578bf',
              'X-RapidAPI-Host': 'nutrition-calculator.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              return response.data;
          } catch (error) {
              console.error(error);
          }
    }
}

export default new UserService();