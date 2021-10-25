import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux"
import reducer from "./redux/reducer/reducer"

const rootReducer = combineReducers({
  reducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>      
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
