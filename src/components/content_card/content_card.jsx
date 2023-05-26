/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import './content_card.scss';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Contentcard(props) {
  return (
    <div className="contentcard">
      <div className="image-container">
        <div className="icon">
          <img src="src/assets/file-solid.svg" alt="" />
        </div>
      </div>
      <div className="caption">
        <span>
          {props.lecture.Title};
        </span>
      </div>
    </div>
  );
}

export default Contentcard;
