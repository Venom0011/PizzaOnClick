import axios from "axios";

class PizzaService{

    getAllPizza(){
       return  axios.get("/pizza/getallPizza");
    }
}

export default new PizzaService();