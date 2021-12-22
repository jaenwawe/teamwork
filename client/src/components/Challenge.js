import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 


import { increaseVote, decreaseVote } from "/Users/jaenwawe/alpha/teamwork/client/src/redux/actions/challengeActions"



function Challenge ({key, challenge}){
    const dispatch = useDispatch()
    // const challenge = useSelector((state) => 
    // console.log (state.challenges))




    return (
      <div className="card">
        <h2>Name: {challenge.title}</h2>
        <h2>{challenge.question}</h2>
            <img src={challenge.image_url} alt={challenge.title}></img>
        <p>Votes: {challenge.votes}</p>
    
        <br />
        <button
          onClick={() => {
            dispatch(increaseVote(challenge.id))
          }}>UpVote </button>

          <button
          onClick={() => {
          dispatch({type: "INCREASE_VOTE", payload: challenge.id} )}}> UpVote
          </button>

      
        <button
          onClick={() => {
          dispatch({type: "DECREASE_VOTE", payload: challenge.id} )}}>
              Down Vote
          </button>
      
        <button
          onClick={() => {
            dispatch(decreaseVote(challenge.id));
          }}> 
          Down Vote
        </button>


      </div>
    );
};

export default Challenge
