import React, {useEffect,useState } from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux"; 


import Login from './Login'
import Home from './Home'


import { increaseVote, decreaseVote, setChallenges, getChallenges } from "../redux/actions/challengeActions"
import { getSolutions } from "../redux/actions/solutionActions"

function App(){
  const dispatch = useDispatch()
  let user = useSelector((state) => state.users.user)
  // const [current, setCurrent] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((current) => 
        {
          // setCurrent(current)
          dispatch({ type: "CURRENT_USER", payload: current })
          dispatch(getSolutions()) 
          dispatch(getChallenges()) 
          
        });
      }
    });
  }, []);
  const loggedIn = useSelector((state) => state.users.loggedIn)

      const xmas = (!loggedIn      
        ? <Route  path="/"  component= {Login}/>
        : <Route  path="/" component= {Home}/>)


    return (
      <div>
        <div>App</div>
   
     
        <Switch>
        {xmas}
         </Switch> 
         
      
      </div>
    )
  }
export default App;