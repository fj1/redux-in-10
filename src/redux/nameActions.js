import { UPDATE_NAME } from "./nameActionTypes";

export const updateName = e => ({
  type: UPDATE_NAME,
  name: e.target.value
});
