import {UPDATE_NAME} from './actionTypes';

const defaultState = {
  name: ''
}

const reducer = (state = defaultState, action) => {
  const {name, type} = action;

  switch(type) {
    case UPDATE_NAME: {
      return {
        ...state,
        name
      }
    }

    default:
      return state
  }
}

export default reducer;