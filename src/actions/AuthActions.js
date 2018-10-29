import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, LOGOUT_USER, NOT_LOGIN_YET } from './types';
// import { userInfo } from 'os';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            loginUserSuccess(dispatch, user);
        })
        .catch((error) => {
            console.log(error);

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
            })
            .catch(() => loginUserFail(dispatch));
        });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut();
        dispatch({ type: LOGOUT_USER });
    };
};

export const alreadyLogin = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    };
};

export const notLoginYet = () => {
    return {
        type: NOT_LOGIN_YET,
        payload: 'Belum Login'
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}