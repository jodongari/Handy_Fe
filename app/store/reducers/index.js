import {combineReducers} from 'redux';
import User from './user_reducer';
import Stores from './store_reducer';
import Diaries from './diary_reducer';

const rootReducer = combineReducers({
  User,
  Stores,
  Diaries,
});

export default rootReducer;
