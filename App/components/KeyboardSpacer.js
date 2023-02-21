import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, { useEffect } from 'react';

const KeyboardSpacer = ({ onToggle }) => {
  const [KeyboardSpace, setKeyboardSpace] = React.useState(0);

  useEffect(() => {
    const showListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        const screenHeight = Dimensions.get('window').height;
        const endY = event.endCoordinates.screenY;

        setKeyboardSpace(screenHeight - endY + 20);
        onToggle(true);
      }
    );

    const hideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardSpace(0);
        onToggle(false);
      }
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={[styles.container, { height: KeyboardSpace }]} />
  );
};

export default KeyboardSpacer;

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});
