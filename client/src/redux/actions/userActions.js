import { useSelector, useDispatch} from "react-redux"; 

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
  