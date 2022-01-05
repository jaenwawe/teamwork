import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { useState,useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


import { addSolution, setSolutions} from "../redux/actions/solutionActions"

const AddSolution = () => {
    const dispatch = useDispatch()
    const history = useHistory() 
    const solutionsArr = useSelector((state) => state.solutions);
    const user_id = useSelector((state) => state.users.user.id)
    const challenge_id = useParams().id 
    const [explaination, setExplaination] = useState('')
    const [hint, setHint] = useState('')
    const [questions, setQuestion] = useState('')


    const handleSubmit = (e) => 
    {        
        e.preventDefault()
        dispatch(addSolution(user_id, challenge_id, explaination, hint, questions)) 
        dispatch(setSolutions()) 
        history.push(`/solutions/${challenge_id}`) 
    }

    return (
    <div className="add-form"> 
          <h1>Add questions to clarify the challenge, hint, or the answer!</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="form-label" controlId="formBasicQuestions">
                <Form.Label>Clarifying Questions</Form.Label>
                <Form.Control type="questions" placeholder="Enter the clarifying question"  onChange={(e) => setQuestion(e.target.value)}/>
                <br/>
            </Form.Group>

            <Form.Group className="form-label" controlId="formBasicHint">
                <Form.Label>Hint</Form.Label>
                <Form.Control type="hint" placeholder="Hint"  onChange={(e) => setHint(e.target.value)}/>
            </Form.Group>
            
            <Form.Group className="explaination" controlId="formControlTextarea">
                <Form.Label>Share your answer and explaination</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setExplaination(e.target.value)}/>
            </Form.Group>        
            <Button className="radius button-color add" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        
        </div> 
        
      )
  }

export default AddSolution;
