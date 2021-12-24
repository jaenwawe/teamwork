import React from "react";
import ReactDom from "react-dom";
import { Link} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux"; 

import { increaseVote, decreaseVote, setSolutions } from "/Users/jaenwawe/alpha/teamwork/client/src/redux/actions/solutionActions"

const Solution = ({solution }) => {

  const dispatch = useDispatch();
  const solutions= useSelector((state)=> state)

  return (
    <div className="card">
     <h1>Solution Title</h1>
      <h2>{solution.hint}</h2>
      <h2>{solution.question}</h2>
      <h2>{solution.explaination}</h2>
          <img src={solution.image_url} alt={solution.title}></img>
     
      <br />

     <button><Link to="/newSolution" classname= "bar">Add a Solution</Link></button> 
    </div>
  );
};

export default Solution;