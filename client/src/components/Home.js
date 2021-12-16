import React, {useState } from "react";

function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
  

        function loginRegisterInfo(email, password,username) 
        {
       
            console.log(email)
            console.log(password)
            console.log(username)
        }
        return(


    <div className="form">   
       <h5> Already a member? Enter your email address and password to login</h5>
       <form  onSubmit={()=>loginRegisterInfo(email,password,username)}>
                           
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
                <div className="mb-3">
                    <label  className="form-label">Username
                        <input 
                            type="usename" 
                            name="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}>    
                        </input>
                    </label>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
       </form>
    
    </div>
)
}
export default Home;