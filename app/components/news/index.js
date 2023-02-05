/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView } from "react-native";
import StoreForm from '../store/storeForm';

class NewsComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <StoreForm />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7487C5',
    paddingTop: 130,
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default NewsComponent;
