import {GET_STORES} from '../types';

import axios from 'axios';

export function getStores() {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080',
  });
  return {
    type: GET_STORES,
    payload: 'something',
  };
}
