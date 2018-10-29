import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCIeX0Gvn46TKsERM-6YtkIXjt8_5mBolY",
            authDomain: "ujian4-4906c.firebaseapp.com",
            databaseURL: "https://ujian4-4906c.firebaseio.com",
            projectId: "ujian4-4906c",
            storageBucket: "ujian4-4906c.appspot.com",
            messagingSenderId: "908535031208"
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