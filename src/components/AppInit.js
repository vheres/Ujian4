import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCmZIGMxhm1E2CXn8M2-BRff0WOrY-4DGo',
            authDomain: 'manager-practice-a968d.firebaseapp.com',
            databaseURL: 'https://manager-practice-a968d.firebaseio.com',
            projectId: 'manager-practice-a968d',
            storageBucket: 'manager-practice-a968d.appspot.com',
            messagingSenderId: '438586394558'
            };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            } else {
                this.props.notLoginYet();
            }
        });
    }

    render() {
        return (
            <Main />
        )
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);