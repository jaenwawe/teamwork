import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";


export function getChallenges()
{ 
      return (dispatch) => {
      // dispatch({ type: "LOADING_CHALLENGES" })
        console.log('getChallenges in challengeActions')
      fetch("/challenges")
            .then(res => {
              if (res.ok) { 
                res.json().then(challenges =>{
                  dispatch({ type: "SET_CHALLENGES", payload: challenges })
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
                dispatch({ type: "SET_CHALLENGES", payload:challenges })
            })
           } else {
            res.json().then(errors => 
            console.error(errors))
          }
      })
    }
  }

         //variables  title, question,photo_url