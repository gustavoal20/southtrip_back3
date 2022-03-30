import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react'
//import HomeViews from './views/HomeViews';


// ReactDOM.render(
// <div>

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// </div>,
//   document.getElementById('root') 

// );

ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider 
  domain='dev-y6v4srp9.us.auth0.com' 
  clientId='WKeFKBb9ttER1uschxb01UvMDZWhP8HN'
  redirectUri={window.location.origin}>
    <App /> 
  </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
