import ReactDOM from 'react-dom';
import { SET_CHALLENGES} from "../actionTypes";
import { INCREASE_VOTE} from "../actionTypes";
import { DECREASE_VOTE } from "../actionTypes";

const initialChallengesState = {
  challenges: []
};


export function challengesReducer(state = initialChallengesState, action) {
console.log(action);
  switch (action.type) {
    case SET_CHALLENGES:
      return {
        ...state,
        challenges: action.payload}

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