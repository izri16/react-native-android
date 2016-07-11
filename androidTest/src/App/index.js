'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import WelcomeScreen from '../WelcomeScreen';
import Login from '../Login';
import Main from '../Main';
import Users from '../Users';
import User from '../Users/User';
import NoPage from '../NoPage';
import styles from './styles';

class App extends Component {
  
  // used by navigator to render scene for given route
  renderScene(route, navigator) {
    const routeId = route.id;
    switch (routeId) {
      case 'WelcomeScreen':
        return (
          <WelcomeScreen
            navigator={navigator} />
        );
      case 'Login':
        return (
          <Login
            navigator={navigator} />
        );
      case 'Main':
        return (
          <Main
            navigator={navigator} />
        );
      case 'Users':
        return (
          <Users
            navigator={navigator} />
        );
      case 'User':
        return (
          <User
            navigator={navigator} />
        );
      default:
        return (
          <NoPage
            navigator={navigator} />
        );
    }
  }

  render() {
    // we provide route object to identify each scene
    return (
      <Navigator
        initialRoute={{id: 'WelcomeScreen', title: 'Index' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
}

export default App;
