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
    case "LOADING_SOLUTIONS":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          solutions: state[action.payload].solutions,
        },
};
    case "SET_SOLUTIONS":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          solutions: state[action.payload].solutions,
        },
      };
    default:
      return state;
  }
}