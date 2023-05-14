/* eslint-disable max-len */
import './display_box.scss';
import React from 'react';
import Contentcard from '../content_card/content_card';

function Displaybox() {
    return (
        <div className="displaybox">
            <div className="notcontentcards">
                <span>
                    Lectures:
                </span>
                <button type="button">
                    Upload lecture
                </button>
            </div>
            <div className="lectures">
                <Contentcard />
            </div>
        </div>
    );
}

export default Displaybox;
