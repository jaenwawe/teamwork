import React, {useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import About from "./About";

import NavBar from "./NavBar";
import Challenges from "./Challenges";
import EachTitle from "../../components/EachTitle";
import ChallengeContainer from "../redux/containers/ChallengeContainer";
import Challenge from "./Challenge";
import AddChallenge from "./AddChallenge"
import HomeContainer from "../../components/HomeContainer";

function Home (){
    const user = useSelector((state) => state.username)
    const loggedIn = null||=username.length
 

    let user = <>
                <Route exact path="/">
                    <HomeContainer/>
                </Route>
                <Route path="/home" component= {HomeContainer} />
                </Route>
                <Route path="/challenges/:id">
                    <Challenge/>
                </Route>
                <Route path="/challenges">
                    <ChallengeContainer/>       
                </Route>
                <Route path="/challenge/add/">
                    </AddChallenge>/>
                </Route>
                <Route path="/logout" component= {Logout} />
            </>


    let guest = 
    <Route path="/login" component= {Login} />

    return (
     
        <div>
           <p>HOME</p>
            <Switch>

                
        {loggedIn ? user : guest}
               
            </Switch>
        </div>
    )
}

export default Home

