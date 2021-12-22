import { SET_USER } from "../actionTypes";
import { CURRENT_USER } from "../actionTypes";
const initialUsersState = {
  user:{},
  loggedIn: false,
};

export function usersReducer(state = initialUsersState, action) {

  switch (action.type) {
    case SET_USER:
      console.log(SET_USER)
      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
        case CURRENT_USER      :
      console.log('CURRENT_USER')
        return {
          ...state,
          user: action.payload,
          loggedIn: true}
           
    default:
      return state;
  }
}

