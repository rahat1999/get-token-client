import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import Main from '../common/main/Main';
import Home from '../homePages/home/Home';


const TheLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Home />
            </div>
            <div>
                <Main></Main>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default TheLayout;