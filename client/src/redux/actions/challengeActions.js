export function increaseVote(id) {
  return {
    type: "INCREASE_VOTE",
    payload: id,
  };
}

export function decreaseVote(id) {
  return {
    type: "DECREASE_VOTE",
    payload: id,
  };
}