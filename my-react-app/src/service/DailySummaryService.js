import axios from "axios";

const POST_DAILYSUMMARY = "http://localhost:8081/login";
const GET_DAILYSUMMARY = "http://localhost:8081/";

class UserService{
    async login(loginDto){
        return await axios.post(POST_LOGIN, loginDto).then((response) => {return response.data});
    }

    async register(userDto){
        console.log(userDto)
        return await axios.post(POST_REGISTER, userDto).then((response) => {return response.data});
    }
}

export default new UserService();