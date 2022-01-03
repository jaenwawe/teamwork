import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { addChallenge} from "../redux/actions/challengeActions"
import { setChallenges} from "../redux/actions/challengeActions"

  const AddChallenge = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const challenges = useSelector((state) => state.challenges);
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')

  const handleSubmit = (e) => 
  {        
        e.preventDefault()
        dispatch(addChallenge(title, question)) 
        dispatch(setChallenges()) 
        history.push('/challenges')
    
    }

    return (
      <div>

        {/* {console.error(errors)} */}
          <div className="add-form"> 
        
              <form  onSubmit={handleSubmit}>
                                  
                          <div className="mb-3" >
                              <label className="form-label">title
                                  <input 
                                      type="title" 
                                      name="title" 
                                      value={title}
                                      onChange={(e) => setTitle(e.target.value)}>
                                  </input>
                              </label>
                          </div>
  
                          <div className="mb-3">
                              <label  className="form-label">question
                                  <input 
                                      type="question" 
                                      name="question" 
                                      value={question}
                                      onChange={(e) => setQuestion(e.target.value)}>    
                                  </input>
                              </label>
                          </div>
  
                          <button type="submit" className="button-bottom">Submit</button>
              </form>   
          </div> 
      </div>
      )
  }

export default AddChallenge;