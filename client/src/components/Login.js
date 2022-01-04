import React, {useState} from "react";
import { useSelector, useDispatch} from "react-redux"; 
import ReactDom from "react-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


import { setChallenges} from "../redux/actions/challengeActions"
import { setSolutions } from "../redux/actions/solutionActions"

import { addUser} from "../redux/actions/userActions";
import { loginCurrentUser} from "../redux/actions/userActions";
import { getCurrentUserLogin} from "../redux/actions/userActions";

import { createBrowserHistory} from "history";





function Login() {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const [first_name, setFirstName] = useState('')
const [bio, setBio] = useState('')
const [isSignedUp, setIsSignedUp] = useState(true)
let signInOrSignUp



const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(loginCurrentUser(username, password) ) 
        dispatch(setSolutions()) 
        dispatch(setChallenges()) 
    }

    function signUpSubmit(e){
        e.preventDefault()
        dispatch(addUser(username, password, first_name, bio))  
        dispatch(setSolutions()) 
        dispatch(setChallenges()) 
    }


    let login = 
    <div className="form"> 

            <h1>Login </h1>

            <h5> Already a member? Enter your username and password to login</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username"  onChange={(e) => setUsername(e.target.value)}/>
                <br/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div> 



let signup =
<div className="form"> 
    <h1>Signup</h1>
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
                        type="text" 
                        name="bio" 
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}>
                    </input>
                </label>
             </div>

        
   
        <button type="submit" className="btn btn-primary">Submit</button>
        
    </form>   
</div> 


    
return (
   
  
<div>
<div>
 
    <div className="teamwork">TeamWork 
    </div>
    
        <button onClick={()=>setIsSignedUp(!isSignedUp)} className="status">    {(!isSignedUp ? signInOrSignUp = "Login" : signInOrSignUp = "Signup")} 
        </button>
                                
      {(isSignedUp ? login : signup)}

  
        
</div>

</div>


    )
}
export default Login;