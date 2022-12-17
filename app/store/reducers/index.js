import {combineReducers} from 'redux';
import User from './user_reducer';
import Store from './store_reducer';
import Diaries from './diary_reducer';

const rootReducer = combineReducers({
  User,
  Store,
  Diaries,
});

export default rootReducer;
