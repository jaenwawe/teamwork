import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";




export function addSolution(user_id, challenge_id, explaination, hints, questions) {
  return (dispatch) => {

    fetch('/solutions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id, challenge_id, explaination, hints, questions}),
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

export function setSolutions()
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

    // export function setCurrentSolution(currrent_solution) {

    //   return (dispatch) => {
    //     dispatch({ type: "CURRENT_SOLUTION"})
        
    //       fetch(`/solutions/${currrent_solution}`)
    //           .then(res => {
    //             if (res.ok) { 
    //               res.json().then(currrent_solution =>{
    //               dispatch({ type: "CURRENT_SOLUTION", payload: currrent_solution})
    //             })
    //             } else {
    //             res.json().then(errors => 
    //             console.error(errors))
    //         }
    //       })
    //     }
    //   } 


    