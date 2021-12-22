import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


import { setChallenges } from "../redux/actions/challengeActions";
import Challenge from "/Users/jaenwawe/alpha/teamwork/client/src/components/Challenge"



function ChallengesContainer() {
    const challenges = useSelector((state) => state.challenges.allChallenges);
      
  const mapChallenges = () => {
    let challengeContainer= Object.values(challenges)
    return challengeContainer.map((challenge) => {
      return (
        <Challenge/>
      );
    });
  };
  return (
    <div>
      <div className="container">{mapChallenges()}</div>
    </div>
  );
};

export default ChallengesContainer;