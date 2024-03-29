import axios from "axios";

const POST_DAILYSUMMARY = "http://localhost:8081/";
const GET_DAILYSUMMARY = "http://localhost:8081/dailySummary/";

class DailySummaryService{
    async getSummaries(username){
        console.log(username)
        return await axios.get(GET_DAILYSUMMARY + username).then((response) => {return response.data});
    }
}

export default new DailySummaryService();