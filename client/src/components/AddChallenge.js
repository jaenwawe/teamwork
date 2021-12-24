import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { useHistory } from 'react-router-dom'
import { useState,useEffect } from 'react'


import { addChallenge} from "../redux/actions/challengeActions"
import { setChallenges} from "../redux/actions/challengeActions"

  const AddChallenge = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const challenges = useSelector((state) => state.challenges);
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [photo_url, setPhotoUrl] = useState('')

  const handleSubmit = (e) => 
  {        
        e.preventDefault()
        dispatch(addChallenge(title, question, photo_url)) 
        dispatch(setChallenges()) 
        history.push('/challenges')
    
    }

    return (
      <div>
          <div className="form"> 
  
              <h5> Thanks for adding a challenge below!</h5>
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

export default AddChallenge;