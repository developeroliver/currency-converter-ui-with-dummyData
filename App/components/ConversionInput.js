import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import { scale } from 'react-native-size-matters';

const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [styles.container];

  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

export default ConversionInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    marginVertical: scale(10),
    borderRadius: scale(5),
  },
  containerDisabled: {
    backgroundColor: colors.offWhite,
  },
  button: {
    backgroundColor: colors.white,
    padding: scale(15),
    borderRightColor: colors.border,
    borderRightWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: colors.blue,
  },
  textInput: {
    flex: 1,
    padding: scale(10),
    color: colors.textLight,
  },
});
