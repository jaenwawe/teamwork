import React from "react";
import ReactDom from "react-dom";

import { useSelector, useDispatch} from "react-redux"; 
function Challenge ({key, challenge}){
    const dispatch = useDispatch()
    const challenges = useSelector((state) => state.challenges.challenges);

    return (
      <div className="card">
        <h2>Name: {challenge.title}</h2>
        <h2>{challenge.question}</h2>
            <img src={challenge.image_url} alt={challenge.title}></img>
        <p>Votes: {challenge.votes}</p>
    
        <br />
        <button
          onClick={() => {
           // move to for going to add challenge see NavBar
          }}>UpVote </button>

       
      </div>
    );
};

export default Challenge
