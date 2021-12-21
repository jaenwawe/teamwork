import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useState } from "react";
import { useSelector, useDispatch} from "react-redux"; 
import ReactDom from "react-dom";

import Login from './Login'
// import Logout from './Logout'
// import HomeContainer from '../redux/containers/HomeContainer'
// import ChallengesContainer from '../redux/containers/ChallengesContainer'
// import AddChallenge from './AddChallenge';

function App(){


 const user= 'user'


    return (
      <div>App
        <BrowserRouter>
        <Switch>
      {user} 
         <Route  path="/" component= {Login} /> 
         </Switch> 
         </BrowserRouter>
      </div>
    )
  }
export default App;
