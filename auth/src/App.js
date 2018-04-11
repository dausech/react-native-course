import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Spinner, Button, Card, CardSection } from './components/common';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyALLWXaajiC5Am_MSR2Ssy8cxvtDV6kS_4',
      authDomain: 'authentication-f552d.firebaseapp.com',
      databaseURL: 'https://authentication-f552d.firebaseio.com',
      projectId: 'authentication-f552d',
      storageBucket: 'authentication-f552d.appspot.com',
      messagingSenderId: '1024245203050'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
             </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  };

}

export default App;
