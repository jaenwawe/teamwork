import { SET_SOLUTIONS } from "../actionTypes";
import { LOADING_SOLUTIONS } from "../actionTypes";
const initialSolutionsState = {
  solutions: [],
  current_challenge: {}
};


export function solutionsReducer(state = initialSolutionsState, action) {
  switch (action.type) {
    case SET_SOLUTIONS:
          return {
            ...state,
            solutions: action.payload,
            current_challenge: {} 
          }
    case LOADING_SOLUTIONS:
      return {
        ...state,
          solutions: action.payload }
    default:
      return state;
    }
}
