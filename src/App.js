import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import CheakoutAll from './Pages/CheakoutAll/CheakoutAll';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import Footer from './Pages/Home/Footer/Footer';
import NavBar from './Pages/Home/Header/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/cheakoutall">
            <CheakoutAll></CheakoutAll>
          </Route>
          <Route exact path="/foodDetails/:foodId">
            <FoodDetails></FoodDetails>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
