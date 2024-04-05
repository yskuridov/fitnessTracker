import axios from "axios";

const POST_EXERCISE = "http://localhost:8081/exercise";
const POST_DAILY_EXERCISE = "http://localhost:8081/dailyExercise";

class ExerciseService {
    async postExercise(exercise) {
        return await axios.post(POST_EXERCISE, exercise).then((response) => { return response.data });
    }

    async postDailyExercise(dailyExercise) {
        console.log(dailyExercise)
        return await axios.post(POST_DAILY_EXERCISE, dailyExercise).then((response) => { return response.data });
    }

    async searchExercisesByName(name) {
        const options = {
          method: 'GET',
          url: 'https://exercisedb.p.rapidapi.com/exercises/name/' + name,
          params: {limit: '15'},
          headers: {
            'X-RapidAPI-Key': 'a8a8b23bcbmsh3b1927f529dc77ep18a3edjsn0798847578bf',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
        };
        console.log(options)
        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async searchExercisesByMuscleGroup(muscle) {
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + muscle,
            params: {limit: '15'},
            headers: {
              'X-RapidAPI-Key': 'a8a8b23bcbmsh3b1927f529dc77ep18a3edjsn0798847578bf',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
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

    async getDailyExercisesByDateAndUsername(username, date){
        console.log(date)
        return await axios.get("http://localhost:8081/dailyExercise/" + username, {params: {date: date}}).then((response) => {return response.data});
    }
}

export default new ExerciseService();