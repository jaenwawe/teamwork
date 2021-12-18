 import { combineReducers } from "redux";

import {challengesReducer} from "./challengesReducer";
import {usersReducer} from "./usersReducer"
import {solutionsReducer} from "./solutionsReducer"


export const rootReducer = combineReducers({
  challenges: challengesReducer,
  users: usersReducer,
  solutions: solutionsReducer,
});