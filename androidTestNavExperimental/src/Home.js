import React, { Component, PropTypes } from 'react';
import { 
  Text,
  View
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

export default Home;
