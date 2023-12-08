import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import AllPizza from './Components/AllPizza'
import PizzaDetails from './Components/PizzaDetails'
import { Container } from 'reactstrap';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar></Navbar>
  
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='/about' element={<About></About>}></Route>
        <Route exact path='/contact' element={<Contact></Contact>}></Route>
        <Route exact path='/pizza' element={<AllPizza></AllPizza>}></Route>
        <Route exact path='/pizza/:id' element={<PizzaDetails></PizzaDetails>}></Route>
      </Routes>
    </>
  );
}

export default App;
