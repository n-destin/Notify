/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
    BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Home from '../pages/home/home';

import Login from '../pages/login/Login';
// import Test from './Test';
// eslint-disable-next-line import/extensions, import/no-unresolved
// import Home from '../pages/home/home';

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
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<FallBack />} />
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
