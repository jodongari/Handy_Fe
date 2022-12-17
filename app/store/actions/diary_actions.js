import {GET_DIARIES} from '../types';
import axios from 'axios';

export function getDiaries() {
  const request = axios({
    method: 'GET',
    url: 'https://jodongari-handy-default-rtdb.firebaseio.com/diary.json',
  })
    .then(response => {
      const diaryData = [];
      for (let key in response.data) {
        if (response.data[key]) {
          diaryData.push({
            ...response.data[key],
          });
        }
      }
      return diaryData;
    })
    .catch(err => {
      alert('diary database error');
      return false;
    });

  return {
    type: GET_DIARIES,
    payload: request,
  };
}
