import { combineReducers } from 'redux';
import article from './article';

const rootReducer = combineReducers({
  data: article,
});

export default rootReducer;