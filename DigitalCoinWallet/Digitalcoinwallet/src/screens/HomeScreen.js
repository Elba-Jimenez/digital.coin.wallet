import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Digital Coin Wallet" />
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default HomeScreen;