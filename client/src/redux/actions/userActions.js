import { useSelector, useDispatch} from "react-redux"; 
import { useHistory} from "react-router-dom";

  export function getCurrentUserLogin() {
    return (dispatch) => {
    
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

  export function loginCurrentUser(username, password)
  {
    return (dispatch) => {
    dispatch({ type: "LOADING_USER" });
 
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
      
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
   dispatch ({type: "REMOVE_CURRENT_SESSION", payload: user})
   history.push("/")
  }
}


export function addUser(username,  password, first_name, bio) {
   return (dispatch) => {

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // if I do params required (keys the body changes )body: JSON.stringify(user:{username, password, first_name, bio})
      body: JSON.stringify({username, password, first_name, bio})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            dispatch({ type: "SET_USER", payload:user },
            getCurrentUserLogin() )

          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
   }
   }