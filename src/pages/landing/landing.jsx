/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import './landing.scss';
import React from 'react';
// import { Button } from '@mui/material';

function Landing() {
  return (
    <div className="landing">
      <div className="header">
        <div className="logo">
          <img src="src/assets/Notify-1 (1).png" alt="Logo" className="logo-image" />
        </div>
        <ul>
          <li>About</li>
          <li>Api Keys</li>
          <li>Community</li>
        </ul>
        <div className="buttonshead">
            <button>Notify</button>
        </div>
      </div>
      <div className="maincont">
        <div className="left">
          <div className="heading">
            Unlock the power of AI
          </div>
          <div className="subtext">
            AI-driven summaries.
            Your personalized educational companion.
          </div>
          <div className="buttons">
            <button>Notify</button>
            <button>Watch Demo</button>
          </div>
        </div>
        <div className="right">
          <div className="grid-container">
            <div className="item1">
              <img src="src/assets/priscilla-fraire-GV4frLpXt5A-unsplash.jpg" alt="Im" />
            </div>
            <div className="item2">
              <img src="src/assets/casey-horner-Hv6-X3RGq6Q-unsplash.jpg" alt="Im" />
            </div>
            <div className="background-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
