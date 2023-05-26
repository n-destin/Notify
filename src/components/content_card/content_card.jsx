/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import './content_card.scss';
import React from 'react';

function Contentcard(props) {
  
  function getNotes(){
    
  }
  return (
    <div className="contentcard">
      <div className="image-container">
        <img src="src/assets/3d-icon-file-page-document-with-magnifying-search-information-data-analysis_22052-4082 1.png" alt="" />
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
