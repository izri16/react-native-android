'use strict';

import React, { Component } from 'react';
import {
  View,
  Navigator,
  TouchableOpacity,
  Text,
  TextInput,
  ListView
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeMyInput } from './actions'
import styles from './styles';
import mainStyles from '../App/styles';

const UsersRow = ({onPress, children}) => {
  return (
    <TouchableOpacity
        style={styles.toUser}
        onPress={onPress}>
        <Text>
          {children}
        </Text>
      </TouchableOpacity>
  );
}

class Users extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  //numberOfLines - only for android
  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <View style={styles.textInputWrapper}>
          <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.props.changeMyInput(text)}
              value={this.props.myInput}
              placeholder={'Search for specific user'}
              maxLength={20}
              multiline={true}
              onBlur={() => console.log("blur")}
              onFocus={() => console.log("focus")}
              numberOfLines={5}
          />
          <Text style={styles.feedback}>
            You have typed:
              <Text style={{fontWeight: 'bold'}}> {this.props.myInput}</Text>
          </Text>
        </View>
          <Text style={styles.available}>Available users</Text>
        <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <UsersRow onPress={this.gotoUserScreen.bind(this, rowData)}>
                {rowData}
              </UsersRow>
            )
          }}
        />
        </View>
      </View>
    );
  }

  gotoUserScreen(user) {
    this.props.navigator.push({
      id: 'User',
      user: user
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
