import './home.scss';
import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Displaybox from '../../components/display_box/display_box';

function Home() {
    return (
        <div className="home">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="contentdisp">
                <Displaybox />
            </div>
        </div>
    );
}

export default Home;
