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
  return {
    type: SIGN_UP,
    payload: {
      email: data.email,
      token: data.token,
    },
  };
}
