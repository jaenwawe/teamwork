import React, {useEffect } from "react";
import ReactDom from "react-dom";
import {  Route, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux"; 

import About from "./About";
import NavBar from "./NavBar";
//import {EachTitle} from "./EachTitle";
import ChallengeContainer from "./ChallengesContainer";
import Challenge from "./Challenge";
import AddChallenge from "./AddChallenge"
import HomeContainer from "./HomeContainer";
import Login from './Login'
import Logout from './Logout'

function Home (){
    
    const user = useSelector((state) => state.users.user)
    console.log(user)
   
    const currentUser = <>
                <Route exact path="/">
                    <HomeContainer/>
                </Route>
                <Route path="/home" component= {HomeContainer} />
                <Route path="/challenges/:id">
                    <Challenge/>
                </Route>
                <Route path="/challenges">
                    <ChallengeContainer/>       
                </Route>
                <Route path="/challenge/add/" component= {AddChallenge}/>
                <Route path="/logout" component= {Logout} />
            </>


    // const guest = 
    // <Route path="/login" component= {Login} />
    // const pages = {user ?  currentUser : guest } 
    
    //I get "You should not use Route outside Routerr it is here"

    return (    

    <div>  
        <NavBar>Home</NavBar>
                <Switch>
                {/* {pages } */}
                
                    <Route exact path="/">
                        <HomeContainer/>
                    </Route>
                    <Route path="/home" component= {HomeContainer} />
                    <Route path="/challenges/:id">
                        <Challenge/>
                    </Route>
                    <Route path="/challenges">
                        <ChallengeContainer/>       
                    </Route>
                    <Route path="/challenge/add/" component= {AddChallenge}/>
                    <Route path="/logout" component= {Logout} />                
            </Switch>
        </div>
    )
}
export default Home
