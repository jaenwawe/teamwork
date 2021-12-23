// import React from "react";
// import { useEffect } from "react";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useSelector } from "react-redux";


// import ChallengesContainer from './ChallengeContainer'
// import SolutionsContainer from './SolutionsContainer'


// import Logout from './Logout'
// import HomeContainer from './HomeContainer'
// import ChallengesContainer from './ChallengesContainer'
// import AddChallenge from './AddChallenge';
// import {Logout} from './Logout'



// function App() {


//   return (

//     <div className="App">
      
//           <BrowserRouter>
//             <Switch>
//               <Route path="/login"><Login/>  </Route>
//               <Route exact path="/"><Login /> </Route> 
//               <Route exact path="/" component= {HomeContainer} />
//               <Route path="/home" component= {HomeContainer} />
//               <Route exact path="/challenges" component={ChallengesContainer}/>
//               <Route exact path="/challenges/:id" component= {ChallengesDetails} />
//               <Route exact path="/challenge/add" component = {AddChallenge} />
//               <Route path "/about" component= {About}/>
//               {/* <Route path="/solutions" component={SolutionsContainer}/> */}
//               <Route path="/challenges/:id/solutions" component= {SolutionsContainer} />
          
//               <Route path="/logout" component= {Logout} />
//             </Switch>
//           </BrowserRouter> 
//     </div>
//   );
// }

// export default App;