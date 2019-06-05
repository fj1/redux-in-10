import { UPDATE_NAME } from "./nameActionTypes";

const defaultState = {
  name: ""
};

const nameReducer = (state = defaultState, action) => {
  const { name, type } = action;

  switch (type) {
    case UPDATE_NAME: {
      return {
        ...state,
        name
      };
    }

    default:
      return state;
  }
};

export default nameReducer;
