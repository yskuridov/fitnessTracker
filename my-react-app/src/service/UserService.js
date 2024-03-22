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
}

export default new UserService();