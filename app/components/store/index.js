/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class StoreComponent extends Component {
  StoreList = {};

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>store Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default StoreComponent;
