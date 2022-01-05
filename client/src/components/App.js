import React, {useEffect,useState } from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux"; 


import Login from './Login'
import Home from './Home'
import { setChallenges } from "../redux/actions/challengeActions"
import { setSolutions } from "../redux/actions/solutionActions"

function App(){
  const dispatch = useDispatch()
  let user = useSelector((state) => state.users.user)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((current) => 
        {
          dispatch({ type: "CURRENT_USER", payload: current })
          dispatch(setSolutions()) 
          dispatch(setChallenges()) 
          
        });
      }
    });
  }, []);
  const loggedIn = useSelector((state) => state.users.loggedIn)

      const enter = (!loggedIn      
        ? <Route  path="/"  component= {Login}/>
        : <Route  path="/" component= {Home}/>)

    return (
      <div>
     
        <Switch>
        {enter}
         </Switch> 
         
      
      </div>
    )
  }
export default App;