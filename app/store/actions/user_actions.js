import {SIGN_IN, SIGN_UP} from '../types';

import axios from 'axios';
import {SIGNUP} from '../../utils/misc';

export function signIn(data) {
  return {
    type: SIGN_IN,
    payload: {
      email: data.email,
      token: data.password,
    },
  };
}

export function signUp(data) {
  const request = axios({
    method: 'POST',
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    header: {
      'content-type': 'application/json',
    },
  })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      // eslint-disable-next-line no-alert
      alert(err);
      return false;
    });

  return {
    type: SIGN_UP,
    payload: request,
  };
}
