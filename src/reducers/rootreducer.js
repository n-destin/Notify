/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { postReducer } from './postsreducer';

export const rootReducer = combineReducers({
    posts: postReducer,
});
