import axios from "axios";

class PizzaService{

    getAllPizza(){
       return  axios.get("/pizza/getallPizza");
    }

    getPizzaById(pid){
        return axios.get("/pizza/"+pid);
    }
}
export default new PizzaService();