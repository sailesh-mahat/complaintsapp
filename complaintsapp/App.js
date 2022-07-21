import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity } from 'react-native';
import Logo from './logo.js';

const App = () => {
  return (
    <View>
      <Logo />
      <Text style= {{ alignSelf: 'center', marginTop: 20, fontSize: 30 }}>Complainer</Text>
      <TouchableOpacity>
            <Text style = {styles.text}>
               Login
            </Text>
      </TouchableOpacity>
      <TouchableOpacity>
            <Text style = {styles.text}>
               Sign Up
            </Text>
      </TouchableOpacity>
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
  text: {
    width: 100,
    textAlign: 'center',
    borderWidth: 0,
    padding: 10,
    borderColor: 'black',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    alignSelf: 'center', 
    marginTop: 40,
    borderRadius: 5
 }
});

export default App
