import React, { Component, PropTypes } from 'react';
import { 
  NavigationExperimental,
  Text,
  ScrollView,
  PixelRatio,
  StyleSheet,
  View
} from 'react-native';

import MyVeryComplexScene from './Scene';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class MainApplication extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // This defines the initial navigation state.
      navigationState: {
        index: 0, // Starts with first route focused.
        routes: [{key: 'My Initial Scene'}], // Starts with only one route.
      },
    };

    // We'll define this function later - hang on
    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  _onNavigationChange(type) {
    let {navigationState} = this.state;

    switch (type) {
      case 'push':
        const route = {key: 'Route-' + Date.now()};
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;
      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
      // If you are new to ES6, the above is equivalent to:
      // this.setState({navigationState: navigationState});
    }

    //back button implementation
  }

  render() {
    return (
      <MyNavigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    );
  }
}

class MyNavigator extends Component {
  constructor(props, context) {
    super(props, context);

    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');

    this._renderScene = this._renderScene.bind(this);
  }

  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
      />
    );
  }

  _renderRoute(key, sceneProps) {
    if (key === 'Home') {
    return (<Home
             onPress={this._handleAction.bind(this,
             { type: 'push', key: 'About' })} /> 
    )
  }
  else {
    return (
      <View>
      <MyVeryComplexScene
        style={{}}
        route={sceneProps.scene.route}
        onPushRoute={this._onPushRoute}
        onPopRoute={this._onPopRoute}
        onExit={this.props.onExit}
      />
      <Text>feafafawfawfawfW</Text>
      </View>)
  }

  }

  _renderScene(sceneProps) {
    console.log('sceneProps', sceneProps.scene.route.key);
    const ComponentToRender = this._renderRoute(sceneProps.scene.route.key, sceneProps)

    return (
      <ScrollView style={styles.scrollView}>
        {ComponentToRender}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  scrollView: {
    //marginTop: 64
  },
  row: {
    //padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default MainApplication;
