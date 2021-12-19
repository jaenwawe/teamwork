import React from "react";
import { useSelector } from "react-redux";
import Challenge from "./Challenge";

const Challenges = (props) => {
  const challenges = useSelector((state) => state.challenges);

  const mapChallenges = () => {
    let challengeArray = Object.values(challenges);
    return challengeArray.map((challenge) => {
      return (
        <Challenge
          key={challenge.id}
          challenge={challenge}
        />
      );
    });
  };
  return (
    <div>
      <div className="container">{mapChallenges()}</div>
    </div>
  );
};

export default Challenges;