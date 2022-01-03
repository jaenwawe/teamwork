import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { useState,useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { addSolution, setSolutions} from "../redux/actions/solutionActions"

const AddSolution = () => {
    const dispatch = useDispatch()
    const history = useHistory() 
    const solutionsArr = useSelector((state) => state.solutions);
    const user_id = useSelector((state) => state.users.user.id)
    const challenge_id = useParams().id 
    const [explaination, setExplaination] = useState('')
    const [hints, setHints] = useState('')
    const [questions, setQuestion] = useState('')


    const handleSubmit = (e) => 
    {        
        e.preventDefault()
        dispatch(addSolution(user_id, challenge_id, explaination, hints, questions)) 
        dispatch(setSolutions()) 
        history.push(`/solutions/${challenge_id}`) 
        }

    return (
      <div>
             {/* {console.error(errors)} */}
          <div className="form"> 
  
              <h5> What are your solutions, questions, or hints</h5>
              <form  onSubmit={handleSubmit}>
                                  
                          <div className="mb-3" >
                              <label className="form-label">explaination
                                  <input 
                                      type="explaination" 
                                      name="explaination" 
                                      value={explaination} 
                                      onChange={(e) =>  setExplaination(e.target.value)}>
                                  </input>
                              </label>
                          </div>

                          <div className="mb-3" >
                              <label className="form-label">hints
                                  <input 
                                      type="hints" 
                                      name="hints" 
                                      value={hints}
                                      onChange={(e) =>  setHints(e.target.value)}>
                                  </input>
                              </label>
                          </div>
  
                          <div className="mb-3">
                              <label  className="form-label">question
                                  <input 
                                      type="questions" 
                                      name="questions" 
                                      value={questions}
                                      onChange={(e) => setQuestion(e.target.value)}>    
                                  </input>
                              </label>
                          </div>
  
                          <button type="submit" className="btn btn-primary">Submit</button>
              </form>   
          </div> 
      </div>
      )
  }

export default AddSolution;
