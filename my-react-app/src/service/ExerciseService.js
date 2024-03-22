import axios from "axios";

const POST_EXERCISE = "http://localhost:8080/exercise";
const POST_DAILY_EXERCISE = "http://localhost:8080/dailyExercise";

class ExerciseService {
    async postExercise(exercise) {
        return await axios.post(POST_EXERCISE, exercise).then((response) => { return response.data });
    }

    async postDailyExercise(dailyExercise) {
        return await axios.post(POST_DAILY_EXERCISE, dailyExercise).then((response) => { return response.data });
    }

    async searchExercisesByName(name) {

        const options = {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: { name: name },
            headers: {
                'X-RapidAPI-Key': 'a8a8b23bcbmsh3b1927f529dc77ep18a3edjsn0798847578bf',
                'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async searchExercisesByMuscleGroup(muscle) {
        const options = {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: { muscle: muscle },
            headers: {
                'X-RapidAPI-Key': 'a8a8b23bcbmsh3b1927f529dc77ep18a3edjsn0798847578bf',
                'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
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