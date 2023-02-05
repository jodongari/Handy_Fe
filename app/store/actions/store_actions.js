import {GET_STORES, REGISTER_STORE} from '../types';
import axios from 'axios';

export function getStores() {
  const request = axios({
    method: 'GET',
    url: 'http://localhost:8080/api/stores/get/0',
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

export function registerStore(data) {
  console.log('test start');
  console.log(data);
  const request = axios({
    method: 'POST',
    url: 'http://localhost:8080/api/store/register',
    data: {
      ownerSeq: data.ownerSeq,
      name: data.name,
      businessName: 'test', //data.businessName,
      businessReportCardImageUrl: 'test', //data.businessReportCardImageUrl,
      businessLicenseImageUrl: 'test', //data.businessLicenseImageUrl,
      businessPersonName: 'test', //data.businessPersonName,
      businessNumber: 'test', //data.businessNumber,
      businessAddress: 'test', //data.businessAddress,
      address: 'test', //data.address,
      telNumber: 'test', //data.telNumber,
      introduction: 'test', //data.introduction,
      openTime: 'test', //data.openTime,
      dayOff: 'test', //data.dayOff,
      originCountry: 'test', //data.originCountry,
      logoImageUrl: 'test', //data.logoImageUrl,
      backgroundImageUrl: 'test', //data.backgroundImageUrl,
      category: 'test', //data.category,
    },
  })
    .then(response => {
      console.log('store register success');
      return response.data;
    })
    .catch(err => {
      alert('store register error');
      return false;
    });

  return {
    type: REGISTER_STORE,
    payload: request,
  };
}
