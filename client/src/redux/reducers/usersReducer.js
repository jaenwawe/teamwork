const SET_USERNAME = "SET_USERNAME"
const initialUsersState = {
  allUsers: [],
};

export function usersReducer(state = initialUsersState, action) {
  console.log(action);
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        [action.payload]: {...[action.payload]},
        username: state[action.payload].username };
    default:
      return state;
  }
}