import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";


export function getChallenges()
{ 
      return (dispatch) => {
      dispatch({ type: "LOADING_Challenges" })
        console.log('getChallenges')
      fetch("/challenges")
            .then(res => {
              if (res.ok) { 
                res.json().then(challenges =>{
                  dispatch({ type: "SET_Challenges", payload: challenges })
              })
             } else {
              res.json().then(errors => 
              console.error(errors))
            }
        })
      }
    }



export function setChallenges()
{

    return (dispatch) => {
    dispatch({ type: "LOADING_CHALLENGES" });
      console.log('loading current challenges')
    fetch("/challenges")
          .then(res => {
            if (res.ok) { 
              res.json().then(challenges =>{
                dispatch({ type: "SET_CHALLNGES", payload:challenges })
            })
           } else {
            res.json().then(errors => 
            console.error(errors))
          }
      })
    }
  }


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