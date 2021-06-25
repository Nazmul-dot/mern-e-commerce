import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../src/components/redux/store'
import { Provider } from 'react-redux'
import { userlogged } from './components/redux/user/userAction'
import {getAllproduct,getCart} from './components/redux/product/prdkAction'

store.dispatch(getAllproduct())
if(localStorage.getItem('token')){
  store.dispatch(userlogged())
  store.dispatch(getCart())
  // store.dispatch(getpayment())
 
}


ReactDOM.render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
