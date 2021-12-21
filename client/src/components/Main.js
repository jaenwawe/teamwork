





import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { increaseVote, decreaseVote } from "../redux/actions/challengeActions.js"
import { useSelector } from "react-redux";


import ChallengesContainer from '../redux/containers/ChallengeContainer'
import SolutionsContainer from '../redux/containers/SolutionsContainer'


import {Logout} from './Logout'



function App() {


 const challenge = {
        votes: 110,
        id:1,
        title: "hello",
        question: "",
        photo_url: ""
      }




  return (

    <div className="App">
        <h1>Votes {challenge.votes}</h1>
          <BrowserRouter>
            <Switch>
            <Route path="/login"><Login/>  </Route>
            <Route exact path="/"><Login /> </Route> 
            <Route path="/challenges"> <ChallengesContainer/> </Route>
            <Route path="/challenges"><SolutionsContainer/></Route>
          </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default App;