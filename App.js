import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs'

// You can import from local files
import SearchScreen from './Screen/SearchScreen';
import BookScreen from './Screen/BookScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
        <Appcontainer />
    )
  }
}

var tabContainer = createBottomTabNavigator({
  Home: {screen:SearchScreen},
  Issue: {screen:BookScreen}
})
const Appcontainer = createAppContainer(tabContainer)