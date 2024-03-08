import axios from "axios";

const POST_EXERCISE = "http://localhost:8080/exercise";
const POST_DAILY_EXERCISE = "http://localhost:8080/dailyExercise";
const GET_EXERCISES = "http://localhost:8080/exercise";

class ExerciseService {
    async postExercise(exercise) {
        return await axios.post(POST_EXERCISE, exercise).then((response) => { return response.data });
    }

    async postDailyExercise(dailyExercise) {
        return await axios.post(POST_DAILY_EXERCISE, dailyExercise).then((response) => { return response.data });
    }

    async searchExercises(name, numberResults) {
        const axios = require('axios');

        const options = {
            method: 'GET',
            url: 'https://gym-fit.p.rapidapi.com/exercises/search',
            params: {
                number: numberResults,
                offset: '0',
                query: name
            },
            headers: {
                'X-RapidAPI-Key': 'a8a8b23bcbmsh3b1927f529dc77ep18a3edjsn0798847578bf',
                'X-RapidAPI-Host': 'gym-fit.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new ExerciseService();