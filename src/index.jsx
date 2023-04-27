/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
// import React from 'react';
// import $ from 'jquery';
// import {
//   BrowserRouter, Routes, Route, NavLink,
// } from 'react-router-dom';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { createRoot } from 'react-dom/client';
// // eslint-disable-next-line import/no-unresolved
// import './style.scss';

// $('#main').html(`Count: ${update()}`);

// let num = 0;

// const secondIncrease = () => {
//   const main = document.getElementById('main');
//   main.innerHTML = `You've been on this page for ${num} seconds`;
//   num += 1;
// };

// setInterval(secondIncrease, 1000);

// function About(props) {
//   return <div> All there is to know about me </div>;
// }
// function Welcome(props) {
//   return <div>Welcome</div>;
// }

// function Test(props) {
//   const { id } = useParams();
//   return (
//     <div>
//       ID:
//       {id}
//     </div>
//   );
// }

// function FallBack(props) {
//   return <div>URL Not Found</div>;
// }

// function Nav(props) {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>

//       </ul>
//     </nav>
//   );
// }

// function App(props) {
//   return (
//     <BrowserRouter>
//       <div>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Welcome />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/test/:id" element={<Test />} />
//           <Route path="*" element={<FallBack />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// const root = createRoot(document.getElementById('main'));
// root.render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

import App from './components/app';
import './style.scss';

// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
