import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default class SearchScreen extends Component {
  render() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Book name</Text>
        </View>
    )
  }
}