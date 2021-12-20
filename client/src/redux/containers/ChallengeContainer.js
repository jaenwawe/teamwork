import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setChallenges } from "../actions/challengeActions";

import Challenge from "../../components/Challenge";

  function ChallengeContainer() {
    const challenges = useSelector((state) => state.challenges.allChallenges);
    const dispatch = useDispatch();
  
    useEffect(() => {
      // dispatch(setChallenges());
      dispatch({ type: "LOADING_CHALLENGES" });
      fetch("/challengs")
        .then((resp) => resp.json())
        .then((data) =>
          dispatch({ type: "SET_CHALLENGES", payload: data.results })
        );
    }, []);
  

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

export default ChallengeContainer;