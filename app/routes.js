import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import SignIn from './components/auth';
import Store from './components/store';
import Diary from './components/diary';

import DiaryDocu from './components/diary/diaryDocu';
import StoreDocu from './components/store/storeDocu';
import Logo from './utils/logo';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();
const DiaryStack = createStackNavigator();
const StoreStack = createStackNavigator();

const headerConfig = {
  headerTitleAlign: 'center',
  headerTintColor: '#000',
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTitleStyle: {
    textAlign: 'center',
  },
};

/*
    Stack Navigator
        - Stack Screen A

    Stack Navigator
        - Tab Navigator
            - Tab Screen B
            - Tab Screen C
*/

const isLoggedIn = true;

const DiaryStackComponent = () => {
  return (
    <DiaryStack.Navigator>
      <DiaryStack.Screen
        name="Diary"
        component={Diary}
        options={headerConfig}
      />
      <DiaryStack.Screen
        name="DiaryDocu"
        component={DiaryDocu}
        options={headerConfig}
      />
    </DiaryStack.Navigator>
  );
};

const StoreStackComponent = () => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="Store"
        component={Store}
        options={headerConfig}
      />
      <StoreStack.Screen
        name="StoreDocu"
        component={StoreDocu}
        options={headerConfig}
      />
    </StoreStack.Navigator>
  );
};

const AppTabComponent = () => {
  return (
    <MainScreenTab.Navigator screenOptions={{headerShown: false}}>
      <MainScreenTab.Screen name="Diary" component={DiaryStackComponent} />
      <MainScreenTab.Screen name="store" component={StoreStackComponent} />
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
