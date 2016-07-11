'use strict';

import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeMyInput } from './actions'
import styles from './styles';
import mainStyles from '../App/styles';

class Users extends Component {

  //numberOfLines - only for android
  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <View style={styles.textInputWrapper}>
          <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.props.changeMyInput(text)}
              value={this.props.myInput}
              placeholder={'put some text here'}
              maxLength={20}
              multiline={true}
              onBlur={() => console.log("blur")}
              onFocus={() => console.log("focus")}
              numberOfLines={5}
          />
          <Text style={styles.feedback}>
            {this.props.myInput}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.toUser}
          onPress={this.gotoUserScreen.bind(this)}>
          <Text>
            To single user screen
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  gotoUserScreen() {
    this.props.navigator.push({
      id: 'User'
    })
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
          Users
        </Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myInput: state.users.input
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeMyInput
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
