import React, { useState, useEffect } from 'react';

import {
    BrowserRouter, Routes, Route, NavLink, useNavigate,
} from 'react-router-dom';
import Home from '../pages/home/home';

import Login from '../pages/login/Login';
// import Test from './Test';
// eslint-disable-next-line import/extensions, import/no-unresolved
import ChatPage from '../pages/chat_page/ChatPage';
import { auth } from '../services/dataStore'

function Nav(props) {
    return (
        <nav>
            <ul className="NavBar">
                <NavLink to="/"></NavLink>
            </ul>
        </nav>
    );
}

function FallBack(props) {
    return <div>URL Not Found</div>;
}

function App(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true)

    // const Navigate = useNavigate();
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
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        element={ < Home />}
                    />
                    <Route path="*" element={<FallBack />} />
                    <Route path = '/chat/:id' element = {<ChatPage />}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
