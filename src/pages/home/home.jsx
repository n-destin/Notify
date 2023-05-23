/* eslint-disable no-unused-vars */
import './home.scss';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Displaybox from '../../components/display_box/display_box';
import { auth } from '../../services/dataStore';
import { newUser, onSessionChange } from '../../services/firebase';

function Home() {
    const [lectures, setLectures] = useState({});
    const user = auth.currentUser;
    console.log(user.uid);

    useEffect(() => {
        onSessionChange(user.uid, (data) => {
            setLectures(data);
        });
    }, []);

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
