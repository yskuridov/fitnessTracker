import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {UserProvider} from "./provider/UserProvider";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='bg-dark'>
    <Router>
    <UserProvider>
      <NavbarComponent/>
      <App/>
    </UserProvider>
  </Router>
  </div>
);


reportWebVitals();
