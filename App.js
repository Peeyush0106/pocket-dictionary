import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <HomeScreen />
        </View>
      </SafeAreaProvider>
    );
  }
}
