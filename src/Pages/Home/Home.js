import React from 'react';
import ChooseUs from './ChooseUs/ChooseUs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Main></Main>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;