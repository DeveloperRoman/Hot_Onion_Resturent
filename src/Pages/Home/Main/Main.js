import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Links from './Links/Links';
import Lunch from './Lunch/Lunch';
import SeeAllButton from './SeeAllButton/SeeAllButton';

const Main = () => {
    return (
        <div>
            <Router>
                <Links></Links>
                <Switch>
                    <Route exact path='/'>
                        <Breakfast></Breakfast>
                    </Route>
                    <Route exact path='/breakfast'>
                        <Breakfast></Breakfast>
                    </Route>
                    <Route exact path='/lunch'>
                        <Lunch></Lunch>
                    </Route>
                    <Route exact path='/dinner'>
                        <Dinner></Dinner>
                    </Route>
                </Switch>
                <SeeAllButton></SeeAllButton>
            </Router>
        </div>
    );
};

export default Main;