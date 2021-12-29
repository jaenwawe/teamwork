import {useEffect} from "react";
import { useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
 import Solution from "/Users/jaenwawe/alpha/teamwork/client/src/components/Solution";

function SolutionsContainer(){  
let solutionArr = useSelector((state) => state.solutions.solutions)

const history = useHistory()
const challenge_id = useParams().id

useEffect(()=>{mapSolutions()},[])
 
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