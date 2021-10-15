import React from 'react';
import ChooseUs from './ChooseUs/ChooseUs';
import Header from './Header/Header';
import Main from './Main/Main';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Main></Main>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;