





import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { increaseVote, decreaseVote } from "../redux/actions/challengeActions.js"
import { useSelector } from "react-redux";



import ChallengesContainer from '../redux/containers/ChallengeContainer'
import SolutionsContainer from '../redux/containers/SolutionsContainer'


import {Logout} from './Logout'



function App() {


 const challenge = {
        votes: 110,
        id:1,
        title: "hello",
        question: "",
        photo_url: ""
      }

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
        <h1>Votes {challenge.votes}</h1>
          <BrowserRouter>
            <Switch>
            <Route path="/login"><Login/>  </Route>
            <Route exact path="/"><Login /> </Route> 
            <Route path="/challenges"> <ChallengesContainer/> </Route>
            <Route path="/challenges"><SolutionsContainer/></Route>
          </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default App;