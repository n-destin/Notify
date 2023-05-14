/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import './display_box.scss';
import React, { useRef } from 'react';
import Contentcard from '../content_card/content_card';

function Displaybox() {
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
    // You can perform further processing on the selected file here
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="displaybox">
      <div className="notcontentcards">
        <span>
          Lectures:
        </span>
        <label htmlFor="lecture-upload" className="button-group">
          <button type="button" onClick={handleButtonClick}>
            Upload lecture
          </button>
          <input type="file" id="lecture-upload" style={{ display: 'none' }} onChange={handleFileInputChange} ref={fileInputRef} />
        </label>
      </div>
      <div className="lectures">
        <Contentcard />
      </div>
    </div>
  );
}

export default Displaybox;
