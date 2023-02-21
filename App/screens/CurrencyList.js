import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import React, { useContext } from 'react';
import colors from '../constants/colors';
import currencies from '../data/currencies.json';
import RowItem from '../components/RowItem';
import RowSeparator from '../components/RowSeparator';
import { useSafeArea } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import { ConversionContext } from '../utils/ConversionContext';

const CurrencyList = ({ navigation, route = {} }) => {
  const insets = useSafeArea();
  const params = route.params || {};

  const { setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency } =
    useContext(ConversionContext);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      <FlatList
        data={currencies}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          let selected = false;
          if (params.isBaseCurrency && item === baseCurrency) {
            selected = true;
          } else if (!params.isBaseCurrency && item === quoteCurrency) {
            selected = true;
          }

          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo
                      name="check"
                      size={24}
                      color={colors.white}
                    />
                  </View>
                )
              }
            />
          );
        }}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};

export default CurrencyList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  icon: {
    backgroundColor: colors.blue,
    width: scale(30),
    height: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
