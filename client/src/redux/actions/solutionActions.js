import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";


export function getSolutions()
{ 
      return (dispatch) => {
     
      fetch("/solutions")
            .then(res => {
              if (res.ok) { 
                res.json().then(solutions =>{
                  dispatch({ type: "SET_SOLUTIONS", payload: solutions })
              })
             } else {
              res.json().then(errors => 
              console.error(errors))
            }
        })
      }
    }










    export function addSolution(user_id, challenge_id, photo_url, explaination, hints, questions) {
      return (dispatch) => {
   
        fetch('/solutions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_id, challenge_id, photo_url, explaination, hints, questions}),
        })
        .then(res => {
          if (res.ok) { 
            res.json().then(solution =>{
              dispatch({ type: "SET_SOLUTION", payload : solution })
          })
         } else {
          res.json().then(errors => 
          console.error(errors))
              }
          })
        }   
    }
    