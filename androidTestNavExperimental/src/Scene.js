import React, { Component } from 'react';
import {
  ScrollView, Text, PixelRatio,
  StyleSheet,
  View
} from 'react-native';

import TappableRow from '../components/TappableRow';

class MyVeryComplexScene extends Component {

  render() {
    const {onPushRoute, onPopRoute, name} = this.props;

    return (
      <View style={styles.main}>
        {onPopRoute &&
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <TappableRow
              text='Back'
              onPress={onPopRoute}
            />
          </View>
          ||
          <View style={{flex: 1}} />
        }
        <View style={{flex: 1, height: 70, justifyContent: 'center'}}>
          <Text style={{color: '#DDDDDD'}}>
            Route: {name}
          </Text>
        </View>
        {onPushRoute && 
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TappableRow
              text='Next'
              onPress={onPushRoute}
            />
          </View>
          ||
          <View style={{flex: 1}} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 1,
    borderBottomColor: '#006AFF',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    minHeight: 70
  }
});

export default MyVeryComplexScene;
