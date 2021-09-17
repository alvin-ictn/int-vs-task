import { combineReducers } from 'redux';
import article, { dialogReducer } from './article';

const rootReducer = combineReducers({
  data: article,
  dialog: dialogReducer
});

export default rootReducer;