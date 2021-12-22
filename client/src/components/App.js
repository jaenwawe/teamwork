import React, {useEffect } from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux"; 


import Login from './Login'
import Home from './Home'
// import Logout from './Logout'
// import HomeContainer from '../redux/containers/HomeContainer'
// import ChallengesContainer from '../redux/containers/ChallengesContainer'
// import AddChallenge from './AddChallenge';

function App(){
  let user = useSelector((state) => state.users.user)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => console.log(user));
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
