import React from 'react';

import {
    BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';

import Login from './Login';
// import Test from './Test';
// eslint-disable-next-line import/extensions, import/no-unresolved
import Home from '../pages/home/home';
import ChatPage from '../pages/chat_page/ChatPage';

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
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/chat" element={<ChatPage />}/>
                    <Route path="*" element={<FallBack />} />
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
