import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { useHistory } from 'react-router-dom'
import { useState,useEffect } from 'react'

  const AddChallenge = () => {
  const dispatch = useDispatch()
  const challenges = useSelector((state) => state.challenges);
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [photo_url, setPhoto_url] = useState('')

 
   const history = useHistory()


  const handleSubmit = (e) => 
  {
        //variables  title, question,photo_url
        
        e.preventDefault();
        //dispatch(addChallenge(title, question,photo_url) ) 
        //keep showing problems and challenges
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
                                      onChange={(e) => setPhoto_url(e.target.value)}>
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