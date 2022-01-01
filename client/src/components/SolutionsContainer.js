import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
 import Solution from "/Users/jaenwawe/alpha/teamwork/client/src/components/Solution";
 import {getSolutions} from "../redux/actions/solutionActions";

function SolutionsContainer(){  
const solutionArr = useSelector((state) => state.solutions.solutions)
const dispatch = useDispatch()

const history = useHistory()
const {challenge_id} = useParams()


// useEffect(()=>{
//   dispatch(getSolutions())  
//   },[])

useEffect(()=>{mapSolutions()},[solutionArr])

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
