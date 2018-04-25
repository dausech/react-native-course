import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBBO9TuiHZv7vcVIVLr_rdsXAC9V_Vwo5c',
            authDomain: 'manager-cbb4d.firebaseapp.com',
            databaseURL: 'https://manager-cbb4d.firebaseio.com',
            projectId: 'manager-cbb4d',
            storageBucket: 'manager-cbb4d.appspot.com',
            messagingSenderId: '211035834790'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;