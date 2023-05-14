import React from 'react';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Counter from './counter';

function About(props) {
  return <div> All there is to know about me </div>;
}
function Welcome(props) {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Test(props) {
  // eslint-disable-next-line no-undef
  const { id } = useParams();
  return (
    <div>
      ID:
      {id}
    </div>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>

      </ul>
    </nav>
  );
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
