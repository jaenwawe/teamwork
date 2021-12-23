
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
import { getSolutions } from "../redux/actions/solutionActions";
 import Solution from "/Users/jaenwawe/alpha/teamwork/client/src/components/Solution";



function SolutionsContainer({challengeId }){  
  const solutions = useSelector((state) => state.solutions.solutions);
  const params = useParams()
  console.log(params)

    const mapSolutions = () => {
      return solutions.map((solution) => {
        return (
        (params ? <Solution solution={solution}/> : <></>)
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