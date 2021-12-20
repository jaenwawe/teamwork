import { SET_USER } from "../actionTypes";
const initialUsersState = {
  allUsers: [],
};

export function usersReducer(state = initialUsersState, action) {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      console.log(SET_USER);
      return {
        ...state,
        user: action.payload };
    default:
      return state;
  }
}