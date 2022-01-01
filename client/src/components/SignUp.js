import React, {useState } from "react";
import { useSelector, useDispatch} from "react-redux"; 
import ReactDom from "react-dom";


import { setChallenges} from "../redux/actions/challengeActions"
import { getSolutions } from "../redux/actions/solutionActions"


import {getCurrentUserLogin} from "../redux/actions/userActions";

import { createBrowserHistory} from "history";

function SignUp() {
const dispatch = useDispatch()

    function signUpSubmit(e){
        e.preventDefault()
        // dispatch(addUser(username, password, email, first_name, bio)  
        dispatch(addUser(username, password, first_name, bio)  
        dispatch(getSolutions()) 
        dispatch(setChallenges()) 
    }

    const username = useSelector((state) => state.username)
    const user = useSelector((state) => state.users.user)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [bio, setBio] = useState('')

    
return (
    <div>
        <div className="form"> 
            <h1>Signup Here </h1>
            <form  onSubmit={signUpSubmit}>

            <div className="mb-3" >
                            <label className="form-label">First Name
                                <input 
                                    type="first_name" 
                                    name="first_name" 
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}>
                                </input>
                            </label>
                        </div>

            <div className="mb-3" >
                            <label className="form-label">Username
                                <input 
                                    type="username" 
                                    name="username" 
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}>
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
                
                        <div className="mb-3" >
                            <label className="form-label">Bio
                                <input 
                                    type="" 
                                    name="bio" 
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}>
                                </input>
                            </label>
                        </div>


{/* 
                        <div className="mb-3" >
                            <label className="form-label">Email address 
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}>
                                </input>
                            </label>
                        </div> */}

                        <button type="submit" className="btn btn-primary">Submit</button>
            </form>   
        </div> 
    </div>
    )
}
export default SignUp;