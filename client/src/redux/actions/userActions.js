import { useSelector, useDispatch} from "react-redux"; 
import { useHistory} from "react-router-dom";

  export function getCurrentUserLogin() {
    return (dispatch) => {
      dispatch({ type: "CURRENT_USER"})
    
        fetch("/me")
            .then(res => {
              if (res.ok) { 
                res.json().then(user =>{
                dispatch({ type: "CURRENT_USER", payload: user })
              })
              } else {
              res.json().then(errors => 
              console.error(errors))
          }
            })
          }
        } 

  export function loginCurrentUser(email, password)
  {
    return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
 
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
          .then(res => {
            if (res.ok) { 
              res.json().then(user =>{
                dispatch({ type: "SET_USER", payload:user },
                getCurrentUserLogin() )
            })
          }else {
            res.json().then(errors => 
            console.error(errors))
          }
      })
    } 
  }


export function logoutCurrentUser()
{  
 return (dispatch) => {
     const user = {}
     const history = useHistory()
     fetch("/logout", {
       method: "DELETE"
   })
   dispatch ({type: "REMOVE_CURRENT_SESSION", payload:user})
   history.push("/")
  }
}





export function addUser(user_id, challenge_id, photo_url, explaination, hints, questions) {
  return (dispatch) => {

    fetch('/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_id, challenge_id, photo_url, explaination, hints, questions}),
    })
    .then(res => {
      if (res.ok) { 
        res.json().then(suser =>{
          dispatch({ type: "SET_USER", payload : suser })
      })
     } else {
      res.json().then(errors => 
      console.error(errors))
          }
      })
    }   
}
