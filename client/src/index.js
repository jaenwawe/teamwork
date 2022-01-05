import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import thunk from 'redux-thunk';

import App from './components/App';
import {store} from "./redux/store";




import './index.css';


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

