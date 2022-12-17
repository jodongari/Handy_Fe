/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AuthLogo from './authLogo';
import AuthForm from './authForm';
import {getTokens, setTokens} from '../../utils/misc';
import {autoSignIn} from '../../store/actions/user_actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AuthComponent extends Component {
  state = {
    loading: false,
  };

  goWithoutLogin = () => {
    this.props.navigation.navigate('AppTabComponent');
  };

  componentDidMount() {
    /*
    value.....
          ['@winthiary_app@userId', 'aefgdg...']
          ['@winthidary_app@token', 'awoeigwWEwgk...']
          ['@winthidary_app@refToken', 'Asrgsioha...']
    */
    getTokens(value => {
      if (value[1][1] !== null) {
        this.props.autoSignIn(value[2][1]).then(() => {
          if (this.props.User.auth.token) {
            setTokens(this.props.User.auth, () => {
              this.goWithoutLogin();
            });
          }
        });
      }
    });

    this.props.navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm goWithoutLogin={this.goWithoutLogin} />
          </View>
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#7487C5',
    paddingTop: 130,
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default AuthComponent;
