/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import { produce } from 'immer';

export const actions = {
    getLectures: 'GET_LECTURES',
    getLecture: 'GET_LECTURE',
    deleteLecture: 'DELETE_POST',
};

const initialStae = {
    Lectures: {

    },
    lecture: {},
};

export const postReducer = produce((draftState, action = {}) => {
    switch (action.type) {
    case actions.getLectures:
        draftState.lectures = action.payload;
        break;
    case actions.getLecture:
        draftState.lecture = action.payload;
        break;
    }
}, initialStae);
