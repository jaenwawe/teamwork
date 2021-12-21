





import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { increaseVote, decreaseVote } from "../redux/actions/challengeActions.js"
import { useSelector } from "react-redux";


import ChallengesContainer from '../redux/containers/ChallengeContainer'
import SolutionsContainer from '../redux/containers/SolutionsContainer'
import ChallengesDetails from '../redux/containers/ChallengeDetails'
import Logout from './Logout'
import HomeContainer from '../redux/containers/HomeContainer'
import ChallengesContainer from '../redux/containers/ChallengesContainer'
import AddChallenge from './AddChallenge';


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
            <Route exact path="/" component= {HomeContainer} />
            <Route path="/challenges" component={ChallengesContainer}/>
            <Route path="/challenges/:id" component= {ChallengesDetails} />
            <Route path="/challenge/add" component = {AddChallenge} />
            <Route path="/solutions" component={SolutionsContainer}/>
          </Switch>
        </BrowserRouter> 

     

        <BrowserRouter>
            <Switch>
            
             
             <Route path="/home" component= {HomeContainer} />
           
        
   

             <Route path="/logout" component= {Logout} />
    
                  
            </Switch>
              
        </BrowserRouter> 
    </div>
  );
}

export default App;