/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
// Help from chat gpt
import './display_box.scss';
import React, { useRef } from 'react';
import Contentcard from '../content_card/content_card';
import { newChat, onSessionChange } from '../../services/firebase';

function Displaybox(props) {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    // You can perform further processing on the selected file here
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
    onSessionChange((sessionId) => {
      console.log('Session ID:', sessionId);
    });
    // newChat(userId, sessionId)
  };

  const lectures = Object.keys(props.lectures).map((lecture) => {
    console.log('getting the lectures');
    console.log(lecture);
    return <Contentcard lecture={lecture} />;
  });

  return (
    <div className="displaybox">
        <div className="lecturescont">
          <span>Recent Lectures</span>
          <div className="lectures">{lectures}</div>
        </div>
        <div className="lectureupload">
          <label htmlFor="lecture-upload" className="button-group">
              <button type="button" onClick={handleButtonClick}>
                Upload lecture
              </button>
              <input type="file" id="lecture-upload" style={{ display: 'none' }} onChange={handleFileInputChange} ref={fileInputRef} />
          </label>
        </div>
    </div>
  );
}

export default Displaybox;
