import React from "react";
import { Link} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux"; 

import { increaseVote, decreaseVote, setSolutions } from "/Users/jaenwawe/alpha/teamwork/client/src/redux/actions/SolutionActions"

const Solution = ({ solution }) => {

  const dispatch = useDispatch();
  const solutions= useSelector((state)=> state)


  console.log(solutions)
  
  return (
    <div className="card">
     <div>Solution Title</div>
      <h2>Name: {solution.title}</h2>
      <h2>{solution.question}</h2>
          <img src={solution.image_url} alt={solution.title}></img>
     
      <br />

     <button><Link to="/newSolution" classname= "bar">Add a Solution</Link></button> 


    </div>
  );
};

export default Solution;