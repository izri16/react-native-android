'use strict';

import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  Text
} from 'react-native';

import styles from './styles';
import mainStyles from '../../App/styles';

class User extends Component {
  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <Text>
          This is single user page
        </Text>
      </View>
    );
  }

  render() {
    return (
      <Navigator 
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar
            style={mainStyles.topBar}
            routeMapper={NavigationBarRouteMapper} />
        }
      />
    );
  }
}

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        style={mainStyles.leftButtonTouchable}
        onPress={() => navigator.parentNavigator.pop()}>
        <Text style={mainStyles.leftButtonText}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        style={mainStyles.rightButtonTouchable}
        onPress={() => navigator.parentNavigator.push({
          id: 'NoPage',
          sceneConfig: Navigator.SceneConfigs.FloatFromBottom}
          )}>
        <Text style={mainStyles.rightButtonText}>
          To unknown
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={mainStyles.topBarTitleTouchable}>
        <Text style={mainStyles.topBarTitleText}>
          User
        </Text>
      </TouchableOpacity>
    );
  }
}

export default User;
