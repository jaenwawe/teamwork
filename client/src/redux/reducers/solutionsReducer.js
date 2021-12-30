import { SET_SOLUTIONS } from "../actionTypes"
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
    default:
      return state;
    }
}


