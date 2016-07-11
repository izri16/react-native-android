'use strict';

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

class WelcomeScreen extends Component {

  componentWillMount() {
    const {navigator} = this.props;
    setTimeout(() => {
      navigator.replace({
        id: 'Login'
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.text}>Welcome</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
