export const APIKEY = 'AIzaSyDUNi4XrDqSafISBagvBXNPj-lT-5PTplc';
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = async (values, callBack) => {
  const firstPair = ['@handy@userId', values.userId];
  const secondPair = ['@handy@token', values.token];
  const thirdPair = ['@handy@refToken', values.refToken];
  try {
    await AsyncStorage.multiSet([firstPair, secondPair, thirdPair]).then(
      response => {
        callBack();
      },
    );
  } catch (e) {
    //save error
  }
};

export const getTokens = async () => {
  let values;
  try {
    values = await AsyncStorage.multiGet([
      '@handy@userId',
      '@handy@token',
      '@handy@refToken',
    ]);
  } catch (e) {
    // read error
  }
  console.log('get tokens : ', values);

  // example console.log output:
  // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
};
