import ReactDOM from 'react-dom';
import { SET_CHALLENGES } from "../actionTypes";
import { INCREASE_VOTE} from "../actionTypes";
import { DECREASE_VOTE } from "../actionTypes";

const initialChallengesState = {
  solutions: []
};


export function challengesReducer(state = initialChallengesState, action) {
console.log(action);
console.log(state)
  switch (action.type) {
    case SET_CHALLENGES:
      return {
        ...state,
        solutions: action.payload }
    
    case "INCREASE_VOTE":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          votes: state[action.payload].votes + 1,
        
        },
      };
    case "DECREASE_VOTE":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          votes: state[action.payload].votes - 1,
        },
      };
    default:
      return state;
  }
}