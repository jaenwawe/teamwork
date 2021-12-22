import { useSelector } from "react-redux";

export function getSolutions()
{ 
      return (dispatch) => {
      dispatch({ type: "LOADING_SOLUTIONS" })
        console.log('getSolutions')
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

    export function addSolutions() {
      return (dispatch) => {
    
        fetch('/newSolution', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           "user_id" : null,
           "challenge_id": null,
           "photo_url": "",
           "explaination": "",
           "hints":"",
           "questions":""
         })
        })
        .then(res => {
          if (res.ok) { 
            res.json().then(solutions =>{
              dispatch({ type: "SET_SOLUTIONS", payload : solutions })
          })
         } else {
          res.json().then(errors => 
          console.error(errors))
              }
          })
        }   
    }
    
    
    
    
   
    