import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import Challenge from "./Challenge";


const AddChallenge = () => {
  const challenges = useSelector((state) => state.challenges);

  return (
    <div>
      <div className="container">Will be a formthat post on </div>
    </div>
  );
};

export default AddChallenge;