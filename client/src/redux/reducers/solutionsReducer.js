import { SET_SOLUTIONS } from "../actionTypes";
import { LOADING_SOLUTIONS } from "../actionTypes";
const initialSolutionsState = {
  solutions: []
};


export function solutionsReducer(state = initialSolutionsState, action) {
  switch (action.type) {
    case SET_SOLUTIONS:
          return {
            ...state,
            solutions: action.payload }
    case LOADING_SOLUTIONS:
      return {
        ...state,
          solutions: action.payload }
    default:
      return state;
    }
}
