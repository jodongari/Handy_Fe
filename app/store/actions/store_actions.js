import {GET_STORES} from '../types';
import axios from 'axios';

export function getStores() {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080/api/stores/get/1',
  })
    .then(response => {
      const storeDate = [];
      console.log(response.data);
      for (let key in response.data) {
        if (response.data[key]) {
          storeDate.push(response.data[key]);
        }
      }
      return storeDate;
    })
    .catch(err => {
      alert('store database error');
      return false;
    });

  return {
    type: GET_STORES,
    payload: request,
  };
}
