import axios from 'axios';
import { useEffect } from 'react';
import * as Firebase from '../services/firebase';
import { actions } from '../reducers/postsreducer';

export function getPost(id) {
    return (dispatch) => {
        useEffect(Firebase.onSessionChange(id, (Lecture) => {
            dispatch({
                type: actions.getLecture,
                payload: Lecture,
            });
        }), []);
    };
}
