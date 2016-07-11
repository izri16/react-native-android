import React, { Component } from 'react';
import { 
  Text,
  TouchableHighlight,
  PixelRatio,
  StyleSheet
} from 'react-native';

class TappableRow extends Component {
  render() {
    const {text, onPress} = this.props;

    return (
    <TouchableHighlight
        style={styles.row}
        underlayColor="#D0D0D0"
        onPress={onPress}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    height: 70,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
    paddingRight: 10,
    marginLeft: 10,
    color: '#DDDDDD'
  },
});

export default TappableRow;
