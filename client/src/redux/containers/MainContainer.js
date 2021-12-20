// import React, {useEffect } from "react";
// import Login from "../components/Login";
// import Home from "../components/Home"


// function Main (){
    
//     return (
//     <Login>
//         )

// }



import React, {useState } from "react";
import { loginCurrentUser } from "../actions/UserAction";

import Home from "./Home"
function Login() {



    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [username, setUsername] = useState('')
    // const [currentUser, setCurrentUser] = useState('')


  

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

        if (currentUser.id) return <Home/>
        return(
          
 <div className="container">
    <div className="form" className="guest"> 

<h2>TeamWork Technical Interview Prep</h2>
   
       <h5> Already a member? Enter your email address and password to login</h5>
       <form  onSubmit={handleSubmit}>
                           
                <div className="mb-3" >
                    <label className="form-label">Email address 
                        <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => useSelector(e.target.value)}
                            >
                        </input>
                    </label>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Password
                        <input 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => useSelector(e.target.value)}  >    
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