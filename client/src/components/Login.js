import React, {useState } from "react";
import { useSelector, useDispatch} from "react-redux"; 

import { increaseVote, decreaseVote } from "../redux/actions/challengeActions.js"

function Login() {

  const dispatch = useDispatch();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [currentUser, setCurrentUser] = useState('')
    const challenge= {
        votes: 0,
        id:1,
        title: "hello",
        question: "",
        photo_url: ""
      }

  

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
            .then(res => {
              if (res.ok) {
                res.json().then (user => 
               {
                  setCurrentUser(user)
                  console.log(currentUser)
                })
              } else {
                res.json().then(errors => 
                console.error(errors))
              }
          })
        }

        return(


    <div className="form"> 


     {/* <button onClick={() => {dispatch(increaseVote())}}      */}
          <button onClick={() => {
            dispatch({type: "INCREASE_VOTE", payload: challenge.id})
            }}>
  Thumbs up</button>
     <button onClick={decreaseVote}>Thumbs down </button>

  <h1>Count </h1>
  <div>
       
      <button onClick={increaseVote}></button></div>
  
              <h2>  First class clothes  Resold at great prices</h2>
   
       <h5> Already a member? Enter your email address and password to login</h5>
       <form  onSubmit={handleSubmit}>
                           
                <div className="mb-3" >
                    <label className="form-label">Email address 
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </label>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Password
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>    
                        </input>
                    </label>
                </div>
         
                <button type="submit" className="btn btn-primary">Submit</button>
       </form>
    
    </div>
)
}
export default Login;