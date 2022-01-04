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

const [username, setUserName] = useState('')
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
    <div className="add-form"> 

            <h1>Login </h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username"  onChange={(e) => setUserName(e.target.value)}/>
                <br/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
              
                <Button className="radius button-color add" variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div> 



let signup =
<div className="add-form"> 

<h1>Sign up</h1>


<Form onSubmit={signUpSubmit}>

<Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="Enter First Name"  onChange={(e) => setFirstName(e.target.value)}/>
    <br/>
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="userName" placeholder="Enter UserName"  onChange={(e) => setUserName(e.target.value)}/>
    <br/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>

    <Form.Group className="bio" controlId="formControlTextarea">
    <Form.Label>Share a little about yourself</Form.Label>
    {/* <Form.Control as="bio" rows={3} onChange={(e) => setBio(e.target.value)}/> */}
    <Form.Control as="textarea" rows={3} onChange={(e) => setBio(e.target.value)}/>
  </Form.Group>
  
    <Button className="radius button-color add" variant="primary" type="submit">
        Submit
    </Button>
</Form>

</div> 


    
return (

<div>
 
    <div className="teamwork radius">TeamWork 
    </div>
        <button onClick={()=>setIsSignedUp(!isSignedUp)} className="status">    {(!isSignedUp ? signInOrSignUp = "Login" : signInOrSignUp = "Signup")} 
        </button>
                                
      {(isSignedUp ? login : signup)}        
</div>
    )
}
export default Login;