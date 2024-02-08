import axios from 'axios';


class UserService{

    getAllProducts(){
        return axios.get('/users')
    }
}

export default new UserService();