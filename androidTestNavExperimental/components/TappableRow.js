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
    padding: 15,
    //backgroundColor: 'blue',
    //borderBottomWidth: 1 / PixelRatio.get(),
    //borderBottomColor: '#CDCDCD',
    height: 60
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default TappableRow;
