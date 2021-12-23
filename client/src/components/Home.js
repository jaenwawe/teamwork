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

function Home (){
    
    const user = useSelector((state) => state.users.user)
    console.log(user)
   
    // const currentUser = <>
    //             <Route exact path="/">
    //                 <HomeContainer/>
    //             </Route>
    //             <Route path="/home" component= {HomeContainer} />
    //             <Route path="/challenges/:id">
    //                 <Challenge/>
    //             </Route>
    //             <Route path="/challenges">
    //                 <ChallengesContainer/>       
    //             </Route>
    //             <Route path="/challenge/add/" component= {AddChallenge}/>
    //             <Route path="/logout" component= {Logout} />
    //         </>

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
                
                <Route path="/challenges/:id/solutions" component= {SolutionsContainer} />
             
                <Route path="/logout" component= {Logout} />


            </Switch>

                    {/* <Route exact path="/" component= {Home} />
                    <Route path="/home" component= {Home} />
                    <Route path="/challenges/:id" component= {Challenge}/>
                    <Route path = "/solutions" component= {SolutionsContainer}/>
                    <Route path="/challenges" component= {ChallengesContainer}/>    
                    <Route path="/challenge/add/" component= {AddChallenge}/>
                    <Route path="/logout" component= {Logout} />                 */}
          
        </div>
    )
}
export default Home
