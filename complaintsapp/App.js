import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Logo from './logo.js';

const App = () => {
  return (
    <View>
      <Logo />
      <Text style= {{ alignSelf: 'center', marginTop: 20, fontSize: 30 }}>Complainer</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
