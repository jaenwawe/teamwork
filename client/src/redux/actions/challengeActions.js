import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";




export function addChallenge(title, question, photo_url)
{ 
    return (dispatch) => {
    dispatch({ type: "ADDING_CHALLENGE" });
  
    fetch("/challenges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title, question,  photo_url}),
    })
          .then(res => {
            if (res.ok) { 
              res.json().then(challenge =>{
                dispatch({ type: "SET_CHALLENGE", payload: challenge })
              })
            }else {
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