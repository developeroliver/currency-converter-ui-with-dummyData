import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale } from 'react-native-size-matters';
import Button from '../components/Button';
import ConversionInput from '../components/ConversionInput';
import KeyboardSpacer from '../components/KeyboardSpacer';
import colors from '../constants/colors';
import { ConversionContext } from '../utils/ConversionContext';

const screen = Dimensions.get('window');

const Home = () => {
  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  } = useContext(ConversionContext);

  const navigation = useNavigation();
  const [scrollEnabled, setScrollEnabled] = React.useState(false);
  const [value, setValue] = React.useState('1');

  const conversionRate = rates[quoteCurrency];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.blue}
        />
        <SafeAreaView style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Options')}
          >
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/background.png')}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>
          {isLoading ? (
            <ActivityIndicator color={colors.white} size="large" />
          ) : (
            <>
              <ConversionInput
                text={baseCurrency}
                value={value}
                onButtonPress={() =>
                  navigation.navigate('CurrencyList', {
                    title: 'Base Currency',

                    isBaseCurrency: true,
                  })
                }
                onChangeText={(text) => setValue(text)}
                keyboardType="numeric"
              />
              <ConversionInput
                text={quoteCurrency}
                value={
                  value &&
                  `${(parseFloat(value) * conversionRate).toFixed(2)}`
                }
                onButtonPress={() =>
                  navigation.navigate('CurrencyList', {
                    title: 'Quote Currency',
                    isBaseCurrency: false,
                  })
                }
                onChangeText={(text) => setValue(text)}
                keyboardType="numeric"
                editable={false}
              />

              <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                  date && format(new Date(date), 'MMM do, yyyy')
                }`}
              </Text>

              <Button
                text="Reverse Currencies"
                onPress={swapCurrencies}
              />
            </>
          )}

          <KeyboardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingHorizontal: scale(20),
  },
  header: {
    alignItems: 'flex-end',
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    fontSize: scale(30),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    marginVertical: scale(20),
  },
  text: {
    fontSize: scale(13),
    textAlign: 'center',
    color: colors.white,
  },
});
