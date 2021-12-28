import React from "react";
import ReactDom from "react-dom";
import { useState} from 'react'

import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch} from "react-redux"; 

import { addSolution, getSolutions} from "../redux/actions/solutionActions"
import {getCurrentChallenge} from "../redux/actions/challengeActions"

const AddSolution = () => {
    const dispatch = useDispatch()
    const history = useHistory() 
    const challenge_id = useParams().id 

    const user_id = useSelector((state) => state.users.user.id)
    let solutionsArr = useSelector((state) => state.solutions.solutions)
    console.log(solutionsArr)
    // const challenge_id = useSelector((state) => state.challenges.current_challenge.id)


    const [explaination, setExplaination] = useState('')
    const [hints, setHints] = useState('')
    const [questions, setQuestion] = useState('')
    const [photo_url, setPhotoUrl] = useState('')

    const handleSubmit = (e) => 
    {        
            e.preventDefault()
           // dispatch(getCurrentChallenge())
             dispatch(addSolution(user_id, challenge_id, photo_url, explaination, hints, questions)) 
             dispatch(getSolutions()) 
             history.push(`/solutions/${challenge_id}`) 
            //history.goBack() 
        }

    return (
      <div>
          <div className="form"> 
  
              <h5> What are your solutins, questions, or hints</h5>
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

                          <div className="mb-3" >
                              <label className="form-label">photo_url
                                  <input 
                                      type="photo_url" 
                                      name="photo_url" 
                                      value={photo_url}
                                      onChange={(e) => setPhotoUrl(e.target.value)}>
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
