/* eslint-disable import/order */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app';
import './index.css';
import { rootReducer } from './reducers/rootreducer';
import { Provider } from 'react-redux';
import Landing from './pages/landing/landing';

const store = configureStore({
    reducer: rootReducer,
});
const root = createRoot(document.getElementById('main'));

root.render(
    <Provider store={store}>
        <App />
<<<<<<< HEAD
    </Provider>,
);
=======
    </Provider>
);
>>>>>>> 26f0c0895a734f122f51a1332097a80942d4dfbc
