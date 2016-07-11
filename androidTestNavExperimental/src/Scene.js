import React, { Component } from 'react';
import {
  ScrollView, Text, PixelRatio,
  StyleSheet,
  View
} from 'react-native';

import TappableRow from '../components/TappableRow';

class MyVeryComplexScene extends Component {
  render() {
    return (
      <View style={[styles.main, {flex: 1, flexDirection: 'row', backgroundColor: 'blue', minHeight: 70}]}>
        <View style={{flex: 1}}>
          <TappableRow
            text='Back'
            onPress={this.props.onPopRoute}
          />
        </View>
        <View style={{flex: 1, height: 70, justifyContent: 'center'}}>
          <Text style={{}}>
            Route: {this.props.route.key}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TappableRow
            text='Next'
            onPress={this.props.onPushRoute}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 1,
    borderBottomColor: '#006AFF'
  },
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

export default MyVeryComplexScene;
