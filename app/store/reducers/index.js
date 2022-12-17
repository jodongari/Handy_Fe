import {combineReducers} from 'redux';
import User from './user_reducer';
import Store from './store_reducer';

const rootReducer = combineReducers({
  User,
  Store,
});

export default rootReducer;
