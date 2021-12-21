import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useState } from "react";
import { useSelector, useDispatch} from "react-redux"; 
import ReactDom from "react-dom";

import Login from './Login'
import Logout from './Logout'
import HomeContainer from '../redux/containers/HomeContainer'
import ChallengesContainer from '../redux/containers/ChallengesContainer'
import AddChallenge from './AddChallenge';

function App(){


  const username = useSelector((state) => state.username)
  const welcome = useSelector((state) => state.users.user)
  console.log(username)

       const user = <>
                <Route exact path="/" component= {HomeContainer} />
             
                <Route path="/home" component= {HomeContainer} />
              
                <Route path="/challenges/:id" component= {ChallengesContainer} />
          
                <Route path="/challenges">
                    <ChallengesContainer/>       
                </Route>
                <Route path="/challenge/add/" component = {AddChallenge} />

                <Route path="/logout" component= {Logout} />
            </>


    const guest = <>  
      <Route exact path="/" component={Login}/> 
      <Route path="/login" component= {Login} />
      </>

    return (
     
      <div>
        <p>App</p>      
        <BrowserRouter>
            <Switch>
            {/* {user ? welcome : guest} */}
            {guest}
                  
            </Switch>
              
        </BrowserRouter> 
</div>
  
    )

}
export default App;