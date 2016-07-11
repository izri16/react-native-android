'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import mainStyles from '../App/styles';

class Main extends Component {
  
  // used by navigator to render scene for give route
  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchable}
          onPress={this.gotoPersonPage.bind(this)}>
          <Text style={styles.text}>
            To users
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  gotoPersonPage() {
    this.props.navigator.push({
      id: 'Users',
    });
  }

  render() {
    console.log('onMain', this.props.navigator.getCurrentRoutes());
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

  popNavigator(navigator) {
    // unmount current scene
    navigator.parentNavigator.pop();
  },

  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={mainStyles.leftButtonTouchable}
          onPress={() => this.popNavigator(navigator)}>
        <Text style={mainStyles.leftButtonText}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={mainStyles.topBarTitleTouchable}>
        <Text style={mainStyles.topBarTitleText}>
          Main Screen
        </Text>
      </TouchableOpacity>
    );
  }
};

export default Main;
