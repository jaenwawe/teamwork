
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setChallenges, getChallenges } from "../redux/actions/challengeActions"
import Challenge from "/Users/jaenwawe/alpha/teamwork/client/src/components/Challenge"


function ChallengesContainer() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setChallenges())  
    },[])

  const challenges = useSelector((state) => state.challenges.challenges);
  
 
  const mapChallenges = () => {
    return challenges.map((challenge) => {
      return (
        <Challenge key={challenge.id} challenge={challenge}/>
      )
    })
  };
  return (
  <div className="main">
      <div className="container">{mapChallenges()}</div>
    </div>
  );
};

export default ChallengesContainer;