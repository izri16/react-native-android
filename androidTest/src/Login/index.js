'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import mainStyles from '../App/styles';

class Login extends Component {
  
  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <TouchableHighlight
            onPress={this.gotoNext.bind(this)}>
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  gotoNext() {
    this.props.navigator.push({
      id: 'Main',
      name: 'Main'
    })
  }

  render() {
    console.log('onLogin', this.props.navigator.getCurrentRoutes());
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)} 
        navigationBar={
          <Navigator.NavigationBar
            style={mainStyles.topBar}
            routeMapper={NavigationBarRouteMapper} />
        }/>
    );
  }
}

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={mainStyles.topBarTitleTouchable}>
        <Text style={mainStyles.topBarTitleText}>
          Login
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Login;
