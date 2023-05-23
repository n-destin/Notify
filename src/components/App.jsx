import React, { useState, useEffect } from 'react';

import {
    BrowserRouter, Routes, Route, NavLink, useNavigate,
} from 'react-router-dom';

import Login from './Login';
// import Test from './Test';
// eslint-disable-next-line import/extensions, import/no-unresolved
import Home from '../pages/home/home';
import ChatPage from '../pages/chat_page/ChatPage';
import { auth } from '../services/dataStore'

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
    const [loading, setLoading] = useState(true)

    const Navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

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
                    <Route path = "/chat" element = {<ChatPage />}/>
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
