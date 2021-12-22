import React from "react";
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
  const user = useSelector((state) => state.users.user)
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
