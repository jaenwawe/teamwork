import ReactDom from "react-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { increaseVote, decreaseVote, setChallenges, getChallenges } from "../redux/actions/challengeActions"
import Challenge from "/Users/jaenwawe/alpha/teamwork/client/src/components/Challenge"



function ChallengesContainer() {
  // const challenges = useSelector((state) => state.challenges.allChallenges)


  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => console.log(user));
  //     }
  //   });
  // }, [])

  // useEffect(() => {
  //   fetch("/challenges")
  //     .then((response) => response.json())
  //     .then((challenges) => console.log(challenges))
  // }, [])
  // console.log(challenges)
    const challenges = useSelector((state) => state.challenges.challenges);
  const mapChallenges = () => {
    // let challengeCont= Object.values(challenges)
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