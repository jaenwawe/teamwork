
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
import { getSolutions,addSolution } from "../redux/actions/solutionActions";
 import Solution from "/Users/jaenwawe/alpha/teamwork/client/src/components/Solution";
 import {setCurrentChallenge} from "../redux/actions/challengeActions"

function SolutionsContainer(){  
const solutionArr = useSelector((state) => state.solutions.solutions);

//empty second time?
console.log(solutionArr)
const history = useHistory()
 const challenge_id = useParams().id
 const user_id  = (useSelector((state) => state.users.user.id))

 
  const mapSolutions = () => {
    return solutionArr.map((solution) => {
      return (
      (solution.challenge_id == challenge_id 
        ?  <Solution key={solution.id} solution={solution}/> 
        : <></>)
      )
    })
  };
  return (
    <div>
        <button onClick={() => history.push(`/newSolution/${challenge_id}`)}> Add a solution </button>

      <div className="container">{mapSolutions()}</div>
    </div>
  );
};

export default SolutionsContainer;