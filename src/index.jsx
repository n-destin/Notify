import { createRoot } from 'react-dom';

import React from 'react';

import App from './components/app';
import './style.scss';

const root = createRoot(document.getElementById('main'));

root.render(
    <App />,
);
