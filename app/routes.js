import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Store from './components/store';
import News from './components/news';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

/*
    Stack Navigator
        - Stack Screen A

    Stack Navigator
        - Tab Navigator
            - Tab Screen B
            - Tab Screen C
*/

const isLoggedIn = true;

const AppTabComponent = () => {
  return (
    <MainScreenTab.Navigator>
      <MainScreenTab.Screen name="signIn" component={SignIn} />
      <MainScreenTab.Screen name="store" component={Store} />
      <MainScreenTab.Screen name="News" component={News} />
    </MainScreenTab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <AuthStack.Screen name="Main" component={AppTabComponent} />
      ) : (
        <>
          <AuthStack.Screen name="SignIn" component={SignIn} />
          <AuthStack.Screen
            name="AppTabComponent"
            component={AppTabComponent}
          />
        </>
      )}
    </AuthStack.Navigator>
  );
};
