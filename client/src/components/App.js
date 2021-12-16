import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './Home'

function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!! currentUser)


  const handleLogin = (event) => {
    event.preventDefault()
    
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
      .then(res => {
        if (res.ok) {
          res.json()
          .then =(setIsLoggedIn(true))
          } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }


  return (

    <div className="App">
        <h1>Page Count: {count}</h1>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home/> 
              </Route> 
              <Route path="/login">
                <Home/> 
              </Route>
          </Switch>
          </BrowserRouter> 
        
    </div>
  );
}

export default App;