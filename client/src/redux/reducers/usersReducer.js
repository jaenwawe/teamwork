import { SET_USER } from "../actionTypes";
import { CURRENT_USER } from "../actionTypes";
const initialUsersState = {
  user:{},
  logged_in: false,
};

export function usersReducer(state = initialUsersState, action) {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      console.log(SET_USER)
      return {
        ...state,
        user: action.payload }
        case CURRENT_USER      :
      console.log('CURRENT_USER')
      return {
        ...state,
        user: action.payload }
        //change login
        return {
          ...state,
          user: action.payload,
          logged_in: true}
           
    default:
      return state;
  }
}

