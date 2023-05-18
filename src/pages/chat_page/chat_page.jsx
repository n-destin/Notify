/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import './chat_page.scss';
import React from 'react';
// import { Input, MailIcon, Button } from '@mui/material';

function Chatpage() {
  return (
    <div className="chatpage">
      <div className="header">
        <div className="ai_info">
          <div className="avatar">
            <img src="src/assets/Notify-1.png" alt="" />
          </div>
          <div className="name">AI</div>
        </div>
        <div className="buttons">
          <div className="homeb">
              <i className="fa-solid fa-house" />
          </div>
          <div className="lightdark">
          <i className="fa-solid fa-sun" />
          </div>
          <div className="report">
          <i className="fa-solid fa-flag" />
          </div>
        </div>
        <div className="user">
          <div className="avatar">
            <img src="src/assets/priscilla-fraire-GV4frLpXt5A-unsplash.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="chatwindow">
          <div className="datecont">
             <div className="date">Today, June 22</div>
          </div>
        <div className="chat">
          <div className="ai">
            <div className="container">
              <div className="avatar">
                <img src="src/assets/Notify-1.png" alt="" />
              </div>
              <div className="name">AI</div>
              <div className="time">5:35 PM</div>
            </div>
            <div className="content">Hello, how is it going?</div>
          </div>
          <div className="user">
            <div className="container">
              <div className="avatar">
                <img src="src/assets/priscilla-fraire-GV4frLpXt5A-unsplash.jpg" alt="" />
              </div>
              <div className="name">You</div>
              <div className="time">5:35 PM</div>
            </div>
            <div className="content">Good, How are you</div>
          </div>
          <div className="ai">
            <div className="container">
              <div className="avatar">
                <img src="src/assets/Notify-1.png" alt="" />
              </div>
              <div className="name">AI</div>
              <div className="time">5:35 PM</div>
            </div>
            <div className="content">Good</div>
          </div>
          <div className="user">
            <div className="container">
              <div className="avatar">
                <img src="src/assets/priscilla-fraire-GV4frLpXt5A-unsplash.jpg" alt="" />
              </div>
              <div className="name">You</div>
              <div className="time">5:35 PM</div>
            </div>
            <div className="content">Good, How are you</div>
          </div>
        </div>
      </div>
      <div className="messagebar">
        <div className="container">
            <div className="circlecont">
                <div className="microphone">
                    microphone

                </div>
                <div className="input">
                Input

                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Chatpage;
