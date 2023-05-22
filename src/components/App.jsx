/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from 'react';

import {
    BrowserRouter, Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import { auth } from '../services/dataStore';

import Login from './Login';
import Home from '../pages/home/home';

function Nav(props) {
    return (
        <nav>
            <ul className="NavBar">
                <li className="binarylogo"><NavLink to="/">LogIn</NavLink></li>
            </ul>
        </nav>
    );
}

function FallBack(props) {
    return <div>URL Not Found</div>;
}

function App(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
                    />
                    <Route path="*" element={<FallBack />} />
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
