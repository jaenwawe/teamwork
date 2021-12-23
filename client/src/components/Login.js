import React, {useState } from "react";
import { useSelector, useDispatch} from "react-redux"; 
import ReactDom from "react-dom";


import { increaseVote, decreaseVote, setChallenges, getChallenges } from "../redux/actions/challengeActions"
import { getSolutions } from "../redux/actions/solutionActions"

import { loginCurrentUser} from "../redux/actions/userActions";
import { getCurrentUserLogin} from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";
import { createBrowserHistory} from "history";


import ChallengesContainer from "./ChallengesContainer";
import Challenge from "./Challenge";
import Home from "./Home";


function Login() {
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault();
        dispatch(loginCurrentUser(email, password) ) 
        dispatch(getSolutions()) 
        dispatch(getChallenges()) 
    }

    const username = useSelector((state) => state.username)
    const user = useSelector((state) => state.users.user)
    console.log(user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
return (
    <div>
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
    </div>
    )
}
export default Login;