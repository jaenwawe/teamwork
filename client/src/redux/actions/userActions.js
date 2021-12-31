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
                dispatch({ type: "SET_USER", payload:user })
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
   dispatch ({type: "REMOVE_CURRENT_SESSION", payload: user})
   history.push("/")
  }
}





export function addUser(username,  password,  email, first_name, bio) {
  return (dispatch) => {

    fetch('/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({username,  password,  email, first_name, bio}),
    })
    .then(res => {
      if (res.ok) { 
        res.json().then(user =>{
          dispatch({ type: "SET_USER", payload : user })
      })
     } else {
      res.json().then(errors => 
      console.error(errors))
          }
      })
    }   
}
