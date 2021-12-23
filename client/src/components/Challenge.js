import React from "react";
import ReactDom from "react-dom";
import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch} from "react-redux"; 
function Challenge ({key, challenge}){
    const dispatch = useDispatch()
    const history = useHistory()
    const challenges = useSelector((state) => state.challenges.challenges);
console.log('challenge component')
    return (
      <div className="card">
        <h2>Name: {challenge.title}</h2>
        <h2>{challenge.question}</h2>
            <img src={challenge.image_url} alt={challenge.title}></img>
       
    
        <br />
        <button
          onClick={() => history.push(`/challenges/${challenge.id}/solutions`)
          }>Solutions</button>

       
      </div>
    );
};

export default Challenge
