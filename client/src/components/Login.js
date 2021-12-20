import React, {useState } from "react";
import { useSelector, useDispatch} from "react-redux"; 

import { increaseVote, decreaseVote } from "../redux/actions/challengeActions.js"
import { loginCurrentUser} from "../redux/actions/userActions.js";
import { useHistory } from "react-router-dom";
function Login() {

  const dispatch = useDispatch();
  let history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [currentUser, setCurrentUser] = useState('')

   
  

    function handleSubmit(e){
      e.preventDefault();
      dispatch(loginCurrentUser(email, password) )
    
      console.log('23')
    
      }

        return(


    <div className="form"> 

  <h1>Login </h1>

       

   
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