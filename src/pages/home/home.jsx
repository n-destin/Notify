/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-props-no-multi-spaces */
import './home.scss';
import React, { useEffect, useParams, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Displaybox from '../../components/display_box/display_box';
import { newUser, onSessionChange } from '../../services/firebase';
import { auth } from '../../services/datastore';

function Home() {
    const [lectures, setLectures] = useState({});
    const user = auth.currentUser;

    console.log(user.uid);
    // const userID = user.uid;
    useEffect(() => {
        newUser(user.uid);
    }, []);
    useEffect(onSessionChange(user.uid, (data) => {
            setLectures(data);
        }), []);

    console.log(lectures);

    return (
        <div className="home">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="contentdisp">
                <Displaybox lectures={lectures} />
            </div>
        </div>
    );
}

export default Home;
