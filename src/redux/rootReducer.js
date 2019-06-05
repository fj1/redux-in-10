import {combineReducers} from 'redux';

import nameReducer from './nameReducer';

const rootReducer = combineReducers({
  nameState: nameReducer
})

export default rootReducer;