import {combineReducers} from 'redux';

import nameReducer from './reducer';

const rootReducer = combineReducers({
  nameState: nameReducer
})

export default rootReducer;