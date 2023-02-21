import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';
import colors from '../constants/colors';

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('../assets/images/reverse.png')}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  buttonIcon: {
    width: scale(20),
    height: scale(20),
    marginRight: scale(10),
  },
  buttonText: {
    color: colors.white,
    fontSize: scale(16),
  },
});
