import axios from "axios";

const POST_EXERCISE = "http://localhost:8080/exercise";
const POST_DAILY_EXERCISE = "http://localhost:8080/dailyExercise";
const GET_EXERCISES = "http://localhost:8080/exercise";

class UserService{
    async postExercise(exercise){
        return await axios.post(POST_EXERCISE, exercise).then((response) => {return response.data});
    }

    async postDailyExercise(dailyExercise){
        return await axios.post(POST_DAILY_EXERCISE, dailyExercise).then((response) => {return response.data});
    }
}