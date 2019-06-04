import { UPDATE_NAME} from './actionTypes';

export const updateName = e => ({
  type: UPDATE_NAME,
  name: e.target.value
});
