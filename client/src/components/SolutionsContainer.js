
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
import { getSolutions } from "../redux/actions/solutionActions";
 import Solution from "/Users/jaenwawe/alpha/teamwork/client/src/components/Solution";



function SolutionsContainer(){  
  const solutions = useSelector((state) => state.solutions.solutions);
  const params = useParams()
 // console.log(params)
  //console.log(solutions[0].challenge_id == params)
  //console.log(solutions[0].challenge_id)
  //console.log(params.id)
  //console.log(solutions[0].challenge_id == params.id)

    const mapSolutions = () => {
      return solutions.map((solution) => {
        return (
        (solution.challenge_id == params.id ? <Solution solution={solution}/> : <></>)
        )
      })
    };
    return (
      <div>
        <div className="container">{mapSolutions()}</div>
      </div>
    );
};

export default SolutionsContainer;