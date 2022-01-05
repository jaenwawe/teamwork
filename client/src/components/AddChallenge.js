import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

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
    
          <div className="add-form"> 
                    <h1>Add a new challenge to the list</h1>
                    
        <Form onSubmit={handleSubmit}>

            <Form.Group className="form-label" controlId="formBasicHint">
                <Form.Label>Challenge Title</Form.Label>
                <Form.Control type="title" placeholder="title"  onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="question" controlId="formControlTextarea">
                <Form.Label>Challenge</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setQuestion(e.target.value)}/>
            </Form.Group>

                        
            <Button className="radius button-color add " variant="primary" type="submit">
                Submit
            </Button>
        </Form>

          </div> 
      )
  }

export default AddChallenge;