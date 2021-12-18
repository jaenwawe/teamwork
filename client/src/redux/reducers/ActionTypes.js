
   
export const INCREASE_VOTE = "INCREASE_VOTE";   

export function increaseVote(id){
    return{
        type: INCREASE_VOTE,
        payload:id
    }
}


export function decreaseVote(id){
    return{
        type: INCREASE_VOTE,
        payload:id
    }
}


export const SET_CHARACTERS = "SET_CHARACTERS";
export const SET_CHALLENGES  = "SET_CHALLENGES";


