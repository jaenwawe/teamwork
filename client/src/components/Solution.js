import React from "react";
import ReactDom from "react-dom";
import { Link} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { addSolutions, setSolutions } from "../redux/actions/solutionActions"
import {setCurrentChallenge} from "../redux/actions/challengeActions"

const Solution = ({key, solution}) => {

  const dispatch = useDispatch();
  dispatch(setCurrentChallenge(solution.challenge_id))
  console.log(solution.challenge_id)
 





  return (
    <div className="card">
      <h1>Solution Title</h1>
      <h2>{solution.hint}</h2>
      <h2>{solution.question}</h2>
      <h2>{solution.explaination}</h2>
      <img src={solution.image_url} alt={solution.title}></img>
      
    <br/>

     <button><Link to="/newSolution"  className= "bar">Add a Solution</Link></button> 
    </div>
  );
};

export default Solution;