import React from 'react'
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "./reducers"
const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducer, composeEnhancers);