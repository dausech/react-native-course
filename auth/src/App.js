import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import {
  Header,
  Spinner,
  Button,
  Card,
  CardSection
} from "./components/common";
import Config from 'react-native-config';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.FIREBASE_API_KEY,
      authDomain: Config.AUTH_DOMAIN,
      databaseURL: Config.DATABASE_URL,
      projectId: Config.FIREBASE_PROJECT_ID,
      storageBucket: Config.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: Config.MESSAGE_ID
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
