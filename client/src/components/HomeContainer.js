import React from "react";
import { useEffect } from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch} from "react-redux"; 
import { useHistory } from "react-router-dom";

import ChallengesContainer from "./ChallengesContainer";


function HomeContainer()
{
const dispatch = useDispatch();
let history = useHistory();


    return(
        <ChallengesContainer/> 
        ) 
    }

export default HomeContainer