import ReactDOM from 'react-dom';
import { SET_CHALLENGES } from "./ActionTypes";
// const initialChallengesState = {
//   allChallenges: [],
// };

const initialChallengesState = {
  votes: 1,
  title: "hello",
  question: "",
  photo_url: ""
};

export function challengesReducer(state = initialChallengesState, action) {
  console.log(action);
  switch (action.type) {
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