import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import CheakoutAll from './Pages/CheakoutAll/CheakoutAll';
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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
