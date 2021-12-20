import React, {useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

 import ChallengeContainer from "../redux/containers/ChallengeContainer";
// import Challenge from "/Users/jaenwawe/alpha/teamwork/client/src/components/Challenge.js"
import Challenge from "./Challenge";
import AddChallenge from "./AddChallenge"

function Home (){


 

    return (
     
        <div>
            <p>HOME</p>
        <Switch>
        <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/challenges/:id">
                    <Challenge/>
                </Route>
              
                <Route path="/challenges">
                    <ChallengeContainer/>       
            </Route>
                <Route path="/challenge/add/">
                    <AddChallenge></AddChallenge>/>
                </Route>
        </Switch>
        <HomeContainer>
    </div>
    )
}

export default Home

