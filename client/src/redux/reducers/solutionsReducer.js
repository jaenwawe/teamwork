import { SET_SOLUTIONS } from "../actionTypes"
import { SET_SOLUTION } from "../actionTypes"
import { CURRENT_SOLUTION } from "../actionTypes"


const initialSolutionsState = {
  solutions: [],
  currrent_solution: {}

};


export function solutionsReducer(state = initialSolutionsState, action) {
  switch (action.type) {
  
    case SET_SOLUTIONS:
      return {
        ...state,
        solutions: action.payload,
        currrent_solution: {}
      }
      case CURRENT_SOLUTION:
        return {
          ...state,
          currrent_solution : action.payload}
      case SET_SOLUTION:
        return state;
    default:
      return state;
    }
}


