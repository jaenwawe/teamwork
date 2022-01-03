import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
 import Solution from "/Users/jaenwawe/alpha/teamwork/client/src/components/Solution";
 import {setSolutions} from "../redux/actions/solutionActions"

function SolutionsContainer(){  
useEffect(()=>{
  dispatch(setSolutions())  
  },[])

const solutionArr = useSelector((state) => state.solutions.solutions)
const dispatch = useDispatch()

const history = useHistory()
const {challenge_id} = useParams()


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
    <div className="list-container">

      <div className="container">{mapSolutions()}</div>
      <button onClick={() => history.push(`/newSolution/${challenge_id}`)} className="button-bott"> Add a solution </button>
    </div>
  );
};

export default SolutionsContainer;
