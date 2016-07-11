'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

class NoPage extends Component {
  render() {
    const {navigator} = this.props;
    return (
      <View
        style={styles.container}>
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text style={styles.text}>
            This page does not exists!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NoPage;
