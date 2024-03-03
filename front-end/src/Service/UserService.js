import axios from 'axios';
import authHeader from './AuthHeader';

class UserService{

    getAllUsers(){
        console.log(authHeader());
        return axios.get('/users')
    }
}

export default new UserService();