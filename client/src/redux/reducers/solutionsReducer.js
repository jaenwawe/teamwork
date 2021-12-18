const initialSolutionsState = {
  1: {
    id: 0,
    title: "",
    question: "",
    votes: 0,
    image_url: "N/A",
    }
};


export function solutionsReducer(state = initialSolutionsState, action) {
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