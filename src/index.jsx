import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app';
import './index.css';
import { rootReducer } from './reducers/rootreducer';
import { Provider } from 'react-redux';


const store = configureStore({
    reducer: rootReducer
})
const root = createRoot(document.getElementById('main'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);