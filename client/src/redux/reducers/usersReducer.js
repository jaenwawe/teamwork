import { SET_USER } from "../actionTypes";
import { CURRENT_USER } from "../actionTypes";
import { REMOVE_CURRENT_SESSION } from "../actionTypes";




const initialUsersState = {
  user:{},
  loggedIn: false,
};

export function usersReducer(state = initialUsersState, action) {

  switch (action.type) {
    case SET_USER:

      return {
        ...state,
        user: action.payload,
        loggedIn: true
      }
        case CURRENT_USER:
  
        return {
          ...state,
          user: action.payload,
          loggedIn: true}

          
      case REMOVE_CURRENT_SESSION:

        return {
          ...state,
          user: {},
          loggedIn: false }

           
    default:
      return state;
  }
}

