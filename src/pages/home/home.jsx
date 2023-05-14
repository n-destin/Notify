import './home.scss';
import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Contentcard from '../../components/content_card/content_card';
import Displaybox from '../../components/display_box/display_box';

function Home() {
    return (
        <div className="home">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="contentdisp">
                <Displaybox />
                <div className="contentcard">
                    <Contentcard />

                </div>
            </div>
        </div>
    );
}

export default Home;
