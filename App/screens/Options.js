import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import RowItem from '../components/RowItem';
import RowSeparator from '../components/RowSeparator';

const openUrl = (url) => {
  Linking.openURL(url).catch(() =>
    Alert.alert(
      'An error occurred',
      'Please check your internet connection.'
    )
  );
};

export default () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <RowItem
        text="Themes"
        onPress={() =>
          openUrl(
            'https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter'
          )
        }
        rightIcon={
          <Entypo
            name="chevron-right"
            size={20}
            color={colors.blue}
          />
        }
      />

      <RowSeparator />

      <RowItem
        text="React Native Basics"
        onPress={() => openUrl('https://reactnativebyexample.com')}
        rightIcon={
          <Entypo name="export" size={20} color={colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        text="React Native by Example"
        onPress={() =>
          openUrl(
            'https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter'
          )
        }
        rightIcon={
          <Entypo name="export" size={20} color={colors.blue} />
        }
      />
    </SafeAreaView>
  );
};
