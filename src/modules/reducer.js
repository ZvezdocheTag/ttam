import { combineReducers } from 'redux';
import formReducer from './form';
import userReducer from './user';

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer
});

export default rootReducer;
