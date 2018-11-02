import firebase from 'firebase';
import { PICTURE_GETLIST_SUCCESS, PICTURE_UPDATE, PICTURE_CREATE } from './types';

export const getPictureList = () => {
    return (dispatch) => {
        firebase.database().ref(`/post`)
        .on('value', snapshot => {
            dispatch({ type: PICTURE_GETLIST_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const pictureUpdate = (prop, value) => {
    return {
        type: PICTURE_UPDATE,
        payload: { prop, value }
    };
};

export const pictureCreate = (user, image, caption) => {
    return (dispatch) => {
        firebase.database().ref(`/post`)
        .push({ user, image, caption })
        .then(() => {
            dispatch({ type: PICTURE_CREATE });
        });
    };
};