import axios from "axios";
import authHeader from "./AuthHeader";
class AuthService{

     authenticate(params) {
        return axios.post("/login",params);
    }

    getUserByEmail(){
        // console.log(authHeader().Authorization);
        console.log(authHeader());
        return axios.post("/users/email", {},
        {
            headers:{
                "Authorization": JSON.stringify(authHeader().Authorization)
            }
        }
      );
    }
}

export default new AuthService();