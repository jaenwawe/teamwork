
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setChallenges, getChallenges } from "../redux/actions/challengeActions"
import Challenge from "/Users/jaenwawe/alpha/teamwork/client/src/components/Challenge"



function ChallengesContainer() {
  const challenges = useSelector((state) => state.challenges.challenges);
  const mapChallenges = () => {
    return challenges.map((challenge) => {
      return (
        <Challenge key={challenge.id} challenge={challenge}/>
      )
    })
  };
  return (
    <div>
      <div className="container">{mapChallenges()}</div>
    </div>
  );
};

export default ChallengesContainer;