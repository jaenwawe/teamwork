import ReactDOM from 'react-dom';
import { SET_CHALLENGES} from "../actionTypes";
import { SET_CHALLENGE} from "../actionTypes";
import {CURRENT_CHALLENGE } from "../actionTypes";


const initialChallengesState = {
  challenges: [],
  current_challenge: {}
};


export function challengesReducer(state = initialChallengesState, action) {
  switch (action.type) {
    case SET_CHALLENGES:
      return {
        ...state,
        challenges: action.payload,
        current_challenge: {}
      }
      case SET_CHALLENGE:
        return state;
      

      case CURRENT_CHALLENGE:
        return {
          ...state,
          current_challenge : action.payload}

    default:
      return state;
  }
}