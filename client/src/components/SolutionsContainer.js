
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
import { getSolutions,addSolution } from "../redux/actions/solutionActions";
 import Solution from "/Users/jaenwawe/alpha/teamwork/client/src/components/Solution";
 import {setCurrentChallenge} from "../redux/actions/challengeActions"

function SolutionsContainer(){  
const solutions = useSelector((state) => state.solutions.solutions);
const history = useHistory()
 const params = useParams()
 const user_id  = (useSelector((state) => state.users.user.id))
 
  const mapSolutions = () => {
    return solutions.map((solution) => {

  
      return (
      (solution.challenge_id == params.id 
        ?  <Solution solution={solution}/> 
        : <></>)
      )
    })
  };
  return (
    <div>
        <button onClick={() => history.push(`/newSolution`)}> Add a solution </button>
      <div className="container">{mapSolutions()}</div>
    </div>
  );
};

export default SolutionsContainer;