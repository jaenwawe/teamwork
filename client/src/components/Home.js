import React, {useEffect } from "react";
import ReactDom from "react-dom";
import {  Route, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux"; 

import About from "./About";
import NavBar from "./NavBar";
import ChallengesContainer from "./ChallengesContainer";
import Challenge from "./Challenge";
import AddChallenge from "./AddChallenge"
import HomeContainer from "./HomeContainer";
import Login from './Login'
import Logout from './Logout'
import SolutionsContainer from './SolutionsContainer'
import AddSolution from './AddSolution'

function Home (){
    
    // const user = useSelector((state) => state.users.user)
    let challenge_id
    if (challenge_id)
     console.log(challenge_id)

    return (    

    <div>  
        <NavBar>Home</NavBar>
         <Switch>
            <Route exact path="/" component= {HomeContainer} />
            <Route path="/home" component= {HomeContainer} />

            <Route path ="/about" component= {About}/>

            <Route exact path="/challenges" component={ChallengesContainer}/>
            <Route exact path="/challenge/add" component = {AddChallenge} />
            
            <Route path="/challenges/:id" component={Challenge}/>
            <Route path="/solutions/:challenge_id" component= {SolutionsContainer}/>
            <Route path="/newSolution/:id" component= {AddSolution} />

            <Route path="/logout" component= {Logout} />
    </Switch>
          
        </div>
    )
}
export default Home
