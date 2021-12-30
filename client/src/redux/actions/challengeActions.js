import { useDispatch, useSelector } from "react-redux";


export function getCurrentChallenge() {

  return (dispatch) => {
    dispatch({ type: "CURRENT_CHALLENGE"})
    const challenge_id = useSelector((state) => state.challenges.current_challenge.challenge_id)
      fetch(`/challenge/${challenge_id}`)
          .then(res => {
            if (res.ok) { 
              res.json().then(current_challenge =>{
              dispatch({ type: "CURRENT_CHALLENGE", payload: current_challenge})
            })
            } else {
            res.json().then(errors => 
            console.error(errors))
        }
          })
        }
      } 


      export function setCurrentChallenge(current_challenge) {

        return (dispatch) => {
          dispatch({ type: "CURRENT_CHALLENGE"})
          
            fetch(`/challenges/${current_challenge}`)
                .then(res => {
                  if (res.ok) { 
                    res.json().then(current_challenge =>{
                    dispatch({ type: "CURRENT_CHALLENGE", payload: current_challenge})
                  })
                  } else {
                  res.json().then(errors => 
                  console.error(errors))
              }
            })
          }
        } 
  





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
