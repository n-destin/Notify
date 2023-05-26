/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import './content_card.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Firebase from '../../services/firebase';

function Contentcard(props) {
  const navigate = useNavigate();
  console.log(`LECTURE: ${props.lecture}`);
  const handleClickClient = (LectureId) => {
    console.log('going to the lecture');
    navigate(`/chat/${LectureId}`);
  };
  return (
    <div className="contentcard">
      <div className="image-container">
        <img src="src/assets/3d-icon-file-page-document-with-magnifying-search-information-data-analysis_22052-4082 1.png" alt="" />
      </div>
      <div className="caption">
        <span>
          {props.lecture.Title}
;
        </span>
      </div>
        <button type="button" onClick={() => { handleClickClient(props.lecture); }}>Go to the lecture</button>
    </div>
  );
}

export default Contentcard;
